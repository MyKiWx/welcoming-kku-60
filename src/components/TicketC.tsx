/* eslint-disable react-hooks/exhaustive-deps */
// "use client"

import QRCode from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  ticket_C_isDownload: boolean;
  setTicket_C_isDownload: (value: boolean) => void;
};

const TicketC = ({ ticket_C_isDownload, setTicket_C_isDownload }: Props) => {
  const EVENT_TYPE = "C";

  // ANCHOR : Basic data
  const [student_id, setStudent_id] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_id`);
      if (A) {
        return JSON.parse(A);
      }
    }
    return "";
  });
  const [student_name, setStudent_name] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_name`);
      if (A) {
        return JSON.parse(A);
      }
    }
    return "";
  });
  const [student_faculty, setStudent_faculty] = useState(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`student_faculty`);
      if (A) {
        return JSON.parse(A);
      }
    }
    return "";
  });


  // ANCHOR : Ticket code number
  const [count_student_student, setCount_student_student] = useState<string>(
    () => {
      if (typeof window !== "undefined") {
        const A = localStorage.getItem(`count_student_student`);
        if (A) {
          return A;
        }
      }
      return "";
    }
  );

  // ANCHOR : Ticket code
  const [ticket_code, setTicket_code] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const A = localStorage.getItem(`ticket_${EVENT_TYPE}_code`);
      if (A) {
        return A;
      }
    }
    return "";
  });

  // FIXME : For change ticket a ref
  const ticket_C_ref = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    // ANCHOR : TICKET
    const ticket_canvas = ticket_C_ref.current;
    if (ticket_canvas) {
      const ticket_context = ticket_canvas.getContext("2d");
      if (ticket_context) {
        // ANCHOR : BACKGROUND
        const ticket_background_canvas = new Image();
        ticket_background_canvas.src = `ticket${EVENT_TYPE}.png`;
        ticket_background_canvas.onload = () => {
          // ANCHOR : QRCODE
          const ticket_getElementById = document.getElementById(
            `ticket_${EVENT_TYPE}_qrcode`
          ) as HTMLCanvasElement;
          if (ticket_getElementById) {
            const ticket_qrcode_image = new Image();
            ticket_qrcode_image.src = ticket_getElementById.toDataURL();
            ticket_qrcode_image.onload = () => {
              // ANCHOR : TEXT
              const student_id_canvas = document.createElement("canvas");
              const student_name_canvas = document.createElement("canvas");
              const student_faculty_canvas = document.createElement("canvas");
              const ticketCode_canvas = document.createElement("canvas");
              const ticket_number_canvas = document.createElement("canvas");
              student_id_canvas.width = 400;
              student_id_canvas.height = 100;
              student_name_canvas.width = 290;
              student_name_canvas.height = 100;
              student_faculty_canvas.width = 290;
              student_faculty_canvas.height = 100;
              ticketCode_canvas.width = 100;
              ticketCode_canvas.height = 700;
              ticket_number_canvas.width = 400;
              ticket_number_canvas.height = 100;
              const student_id_context = student_id_canvas.getContext("2d");
              const student_name_context = student_name_canvas.getContext("2d");
              const student_faculty_context =
                student_faculty_canvas.getContext("2d");
              const ticketCode_context = ticketCode_canvas.getContext("2d");
              const ticket_number_context =
                ticket_number_canvas.getContext("2d");
              if (
                student_id_context &&
                student_name_context &&
                student_faculty_context &&
                ticketCode_context &&
                ticket_number_context
              ) {
                student_id_context.font = "normal 30px Kanit";
                student_name_context.font = "normal 30px Kanit";
                student_faculty_context.font = "normal 30px Kanit";

                ticket_number_context.font = "normal 30px Kanit";
                student_id_context.fontKerning = "auto";
                student_name_context.fontKerning = "auto";
                student_faculty_context.fontKerning = "auto";
                ticketCode_context.fontKerning = "auto";
                ticket_number_context.fontKerning = "auto";
                student_id_context.fillStyle = "black";
                student_name_context.fillStyle = "black";
                student_faculty_context.fillStyle = "black";
                ticket_number_context.fillStyle = "white";

                student_id_context.fillText(student_id, 0, 30);
                student_name_context.fillText(student_name, 0, 30);
                student_faculty_context.fillText(student_faculty, 0, 30);
                ticket_number_context.fillText(count_student_student, 0, 30);

                ticketCode_context.font = "normal 33px Kanit";
                ticketCode_context.fillStyle = "white";
                ticketCode_context.textAlign = "center";
                ticketCode_context.rotate(-Math.PI / 2);
                ticketCode_context.fillText(ticket_code.toLocaleUpperCase(), -350, 40);


                // ANCHOR : Add to main canvas
                ticket_context.drawImage(
                  ticket_background_canvas,
                  0,
                  0,
                  2000,
                  700
                );

                ticket_context.drawImage(
                  ticket_qrcode_image,
                  1630,
                  397,
                  270,
                  270
                );
                ticket_context.drawImage(student_id_canvas, 1630, 58);
                ticket_context.drawImage(student_name_canvas, 1630, 130);
                ticket_context.drawImage(student_faculty_canvas, 1630, 206);
                ticket_context.drawImage(ticket_number_canvas, 70, 625);
                
                ticket_context.drawImage(ticketCode_canvas, 1935, 0);
              }
            };
          }
        };
      }
    }
  }, []);

  useEffect(() => {
    if (ticket_C_isDownload) {
      downloadTicketC();
      setTicket_C_isDownload(false);
    }
  }, [ticket_C_isDownload]);

  const downloadTicketC = () => {
    const ticket_canvas = ticket_C_ref.current;
    if (ticket_canvas) {
      const link = document.createElement("a");
      link.href = ticket_canvas.toDataURL("image/png");
      link.download = "17JUNE-e-Ticket.png";
      link.click();
    }
  };

  return (
    <>
      <div style={{ display: "none" }}>
        <canvas
          ref={ticket_C_ref}
          width={2000}
          height={700}
          style={{
            display: "inline",
          }}
        ></canvas>
        <QRCode
          value={`https://verify.welcomekku60.com/?code=${EVENT_TYPE}.${ticket_code}`}
          size={400}
          fgColor="black"
          bgColor={"transparent"}
          style={{ display: "none" }}
          renderAs="canvas"
          id={`ticket_${EVENT_TYPE}_qrcode`}
        />
      </div>
    </>
  );
};

export default TicketC;
