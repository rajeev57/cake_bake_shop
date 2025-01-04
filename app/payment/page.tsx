"use client"
import { FC, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
// import QRCode from "qrcode.react"; // or any other QR code library
import styles from "./PaymentPage.module.css"; // Optional styling

const PaymentPage: FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams(); // Get search params
    const total = searchParams.get('total');
    const qrCodeUrl = "/images/qr_code_golu.jpg"; // Replace with the URL of your QR code image
    const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!total) {
            router.push("/cart"); // Redirect to cart if no total price is available
        }
    }, [total]);

    const handlePaymentConfirmation = async () => {
        setLoading(true);
        // Here you can add logic to verify the payment (e.g., via a backend API or manually check)
        setTimeout(() => {
            setLoading(false);
            setPaymentConfirmed(true);
            router.push("/");  // Mock successful confirmation
        }, 3000); // Simulate the checking process
    };

    return (
        <div className={styles.paymentPage}>
            <h2>Complete Your Payment</h2>
            <p>Total Price: ₹{total}</p>

            {/* Display QR Code */}
            <div className={styles.qrContainer}>
                <img src={qrCodeUrl} alt="Payment QR Code" className={styles.qrCode} />
            </div>

            <p>Scan the QR code above to make the payment of ₹{total}.</p>

            <div className={styles.confirmationButtonContainer}>
                <button
                    onClick={handlePaymentConfirmation}
                    className={styles.confirmButton}
                    disabled={loading || paymentConfirmed}
                >
                    {loading ? "Verifying Payment..." : "I Have Made the Payment"}
                </button>
            </div>

            {paymentConfirmed && (
                <div className={styles.successMessage}>
                    <h3>Payment Confirmed!</h3>
                    <p>Thank you for your purchase! We will process your order shortly.</p>
                </div>
            )}

            {!paymentConfirmed && !loading && (
                <p>Please confirm your payment after making it using the QR code above.</p>
            )}
        </div>
    );
};

export default PaymentPage;
