const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    type: "svg",
    data: "",
    image: "https://raw.githubusercontent.com/SophiaLab/qrcode/main/assets/img/logo_sophia.png",
    dotsOptions: {
        color: "#000",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff",
    },
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    }
});

function generateQRCode() {
    const text = document.getElementById("text").value;
    if (text) {
        qrCode.update({
            data: text
        });

        qrCode.append(document.getElementById("canvas"));

        const downloadLink = document.getElementById("downloadLink");
        downloadLink.style.display = "inline";
        downloadLink.onclick = () => qrCode.download({ name: "qr_code", extension: "png" });
    } else {
        alert("Por favor, insira algum texto ou URL.");
    }
}
