"use client";

import { useState, useRef } from "react";
import { assessmentSections } from "@/lib/assessment-data";
import { Download, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { cn } from "@/lib/utils";

export default function AssessmentTool() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [otherValues, setOtherValues] = useState<{ [key: string]: string }>({});

  // We use HTMLElement to allow both divs and sections to be captured
  const headerRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<Map<string, HTMLElement>>(new Map());

  const [isGenerating, setIsGenerating] = useState(false);

  const handleToggle = (id: string) => {
    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );
  };

  const handleOtherChange = (id: string, value: string) => {
    setOtherValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleDownloadPDF = async () => {
    // 1. Enter "Print Mode" (Swaps inputs for text divs)
    setIsGenerating(true);

    try {
      // 2. WAIT for React to render the changes (Vital!)
      await new Promise((resolve) => setTimeout(resolve, 500));
      await document.fonts.ready;

      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = 210;
      const pageHeight = 297;
      const margin = 10;
      const contentWidth = pageWidth - margin * 2;

      let cursorY = margin;

      const captureAndAdd = async (element: HTMLElement) => {
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: "#ffffff",
          logging: false,
          useCORS: true,
        });
        const imgHeight = (canvas.height * contentWidth) / canvas.width;
        return { data: canvas.toDataURL("image/png"), height: imgHeight };
      };

      if (headerRef.current) {
        const headerImg = await captureAndAdd(headerRef.current);
        pdf.addImage(
          headerImg.data,
          "PNG",
          margin,
          cursorY,
          contentWidth,
          headerImg.height,
        );
        cursorY += headerImg.height + 5;
      }

      for (const sectionData of assessmentSections) {
        const sectionEl = sectionsRef.current.get(sectionData.title);

        if (sectionEl) {
          const sectionImg = await captureAndAdd(sectionEl);

          if (cursorY + sectionImg.height > pageHeight - margin) {
            pdf.addPage();
            cursorY = margin;
          }

          pdf.addImage(
            sectionImg.data,
            "PNG",
            margin,
            cursorY,
            contentWidth,
            sectionImg.height,
          );
          cursorY += sectionImg.height;
        }
      }

      if (footerRef.current) {
        const footerImg = await captureAndAdd(footerRef.current);

        if (cursorY + footerImg.height > pageHeight - margin) {
          pdf.addPage();
          cursorY = margin;
        }

        pdf.setDrawColor(200, 200, 200);
        pdf.line(margin, cursorY, pageWidth - margin, cursorY);
        cursorY += 5;

        pdf.addImage(
          footerImg.data,
          "PNG",
          margin,
          cursorY,
          contentWidth,
          footerImg.height,
        );
      }

      pdf.save("Pattern-Recognition-Report.pdf");
    } catch (error) {
      console.error("PDF Error:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      // 3. Exit "Print Mode" (Swaps back to inputs)
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12 pb-32 md:px-12 lg:px-24">
      <div className="mx-auto mb-12 max-w-4xl">
        <Link
          href="/tools"
          className="group inline-flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-[#a3a3a3] uppercase transition-colors hover:text-black"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Toolkit
        </Link>
      </div>

      <div
        ref={headerRef as any}
        className="mx-auto mb-12 max-w-4xl bg-white pt-4"
      >
        <div className="border-b border-black pb-8">
          <span className="mb-4 block font-sans text-xs font-bold tracking-[0.3em] text-[#a3a3a3] uppercase">
            Confidential Tool
          </span>
          <h1 className="mb-6 font-sans text-4xl font-black tracking-tighter text-black uppercase md:text-5xl">
            Pattern Recognition.
          </h1>
          <div className="max-w-3xl space-y-4 font-serif text-lg text-[#525252]">
            <p>
              This form is designed to help you identify the emotional and
              environmental triggers associated with your usage. All data is
              processed locally in your browser and is never sent to any server.
            </p>
            <p>
              You can fill out this form whenever you want to track how you feel
              between consumption episodes, creating a personal archive that
              allows you to compare your answers over time and observe patterns,
              progress, and emotional changes.
            </p>
            <p>
              You may also keep these records to share with your therapist,
              supporting deeper conversations and more accurate clinical
              understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl bg-white">
        <div className="space-y-4">
          {assessmentSections.map((section) => (
            <section
              key={section.title}
              ref={(el) => {
                if (el) sectionsRef.current.set(section.title, el);
              }}
              className="bg-white p-4 pt-8"
            >
              <h3 className="mb-6 border-b border-[#f5f5f5] pb-2 font-sans text-lg font-bold tracking-wide text-black uppercase">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-12">
                {section.options.map((option) => {
                  const isChecked = selectedValues.includes(option.id);

                  return (
                    <div key={option.id} className="flex items-start gap-3">
                      <button
                        onClick={() => handleToggle(option.id)}
                        className={cn(
                          "mt-1 flex h-5 w-5 shrink-0 items-center justify-center border transition-all",
                          isChecked
                            ? "border-black bg-black"
                            : "border-[#d4d4d4] hover:border-black",
                        )}
                      >
                        {isChecked && <div className="h-2 w-2 bg-white" />}
                      </button>

                      <div className="flex-1">
                        <span
                          onClick={() => handleToggle(option.id)}
                          className={cn(
                            "cursor-pointer font-serif select-none",
                            isChecked
                              ? "font-medium text-black"
                              : "text-[#525252] hover:text-black",
                          )}
                        >
                          {option.label}
                        </span>

                        {option.hasOther && isChecked && (
                          <div className="mt-2">
                            {/* --- THE MAGIC SWAP --- */}
                            {isGenerating ? (
                              // RENDER 1: PRINT VIEW
                              // Added max-w-[300px] and break-words to FORCE text to wrap inside the column
                              <div className="w-full max-w-75 border-b border-[#d4d4d4] py-2 font-serif text-sm leading-loose wrap-break-word whitespace-pre-wrap text-black">
                                {otherValues[option.id] || ""}
                              </div>
                            ) : (
                              // RENDER 2: EDIT VIEW
                              <textarea
                                rows={1}
                                placeholder="Please specify..."
                                className="w-full resize-none overflow-hidden border-b border-[#d4d4d4] bg-transparent py-2 font-serif text-sm leading-loose text-black outline-none placeholder:text-neutral-300 focus:border-black"
                                value={otherValues[option.id] || ""}
                                onChange={(e) => {
                                  handleOtherChange(option.id, e.target.value);
                                  e.target.style.height = "auto";
                                  e.target.style.height =
                                    e.target.scrollHeight + "px";
                                }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div ref={footerRef as any} className="mt-8 bg-white py-4 text-center">
          <p className="font-sans text-[10px] font-bold tracking-widest text-[#a3a3a3] uppercase">
            Generated via The White Line • Private Assessment
          </p>
        </div>
      </div>

      <div className="fixed right-0 bottom-0 left-0 border-t border-[#e5e5e5] bg-white/95 p-6 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <button
            onClick={() => {
              setSelectedValues([]);
              setOtherValues({});
            }}
            className="flex items-center gap-2 font-sans text-xs font-bold tracking-widest text-[#a3a3a3] uppercase hover:text-black"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="flex items-center gap-3 bg-black px-8 py-3 font-sans text-xs font-bold tracking-widest text-white uppercase transition-all hover:bg-[#262626] disabled:opacity-50"
          >
            {isGenerating ? "Processing..." : "Download Report"}
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
