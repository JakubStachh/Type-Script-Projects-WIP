import QRCode from "qrcode";

async function generateQRCode(data: string) {
    try {
        const url = await QRCode.toDataURL(data);
        console.log("QR Code Generated:", url);
    } catch (error) {
        console.log("Error generating QR Code", error);
    }
}

generateQRCode("https://www.google.com");
