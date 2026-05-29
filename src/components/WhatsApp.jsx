export default function WhatsApp() {
  const handleClick = function() {
    window.open("https://wa.me/919137719788");
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        width: "56px",
        height: "56px",
        backgroundColor: "#25d366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        zIndex: 100,
        fontSize: "28px",
        cursor: "pointer"
      }}
    >
      💬
    </div>
  );
}