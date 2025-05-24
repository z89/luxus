"use client";

import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { atom, useSetAtom } from "jotai";

export const decodedTextAtom = atom<string | null>(null);

export const QRCodeScanner: React.FC = () => {
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const setDecodedText = useSetAtom(decodedTextAtom);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    const startScanner = async () => {
      try {
        const devices = await Html5Qrcode.getCameras();
        if (devices.length && scanning && !scannerRef.current) {
          const cameraId = devices[0].id;
          const html5QrCode = new Html5Qrcode("reader");

          await html5QrCode.start(
            cameraId,
            {
              fps: 10,
              qrbox: { width: 250, height: 250 },
            },
            async (text, result) => {
              console.log("Code matched = ", text, result);
              setDecodedText(text);
              setScanning(false); // stop further scanning

              await html5QrCode.stop();
              await html5QrCode.clear();
              scannerRef.current = null;
            },
            () => {
              // console.warn("Code scan error = ", errorMessage);
            }
          );

          scannerRef.current = html5QrCode;
        }
      } catch (err) {
        console.error("Failed to start QR code scanner", err);
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().then(() => {
          scannerRef.current?.clear();
          scannerRef.current = null;
        });
      }
    };
  }, [scanning, setDecodedText]);

  return <div id="reader" className="w-full h-full" style={{ width: "100%", maxWidth: 400 }} />;
};
