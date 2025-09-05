import { useState } from "react";
import bgImage1 from "./assest/image1.jpg"; // ✅ first background
import bgImage2 from "./assest/image.jpg"; // ✅ second background

export default function App() {
  const [showLetter, setShowLetter] = useState(false);

  const letter = `🤍 أكتب لك الآن، وقلبي ممتلئ بك… لا أدري إن كانت الكلمات ستكفي لأصفك، لكنني أكتب لك من كل أعماقي، من قلب لا يرى فيك مجرد شخص أتحدث معه، بل شيئًا أعمق… حضورك في حياتي مختلف، مميز، لا يشبه أحدًا.
أنتِ لستِ فقط فتاة جميلة، بل روح دافئة، حنونة، تحملين بداخلك رقة العالم كله، ودفء لا يُنسى.
وفي يوم عيد ميلادك، أتمنى لك عمرًا طويلاً جميلاً، تعيشينه براحة وسعادة، وأحلم أن أكون جزءًا من أيامك القادمة… نرسم اللحظات سويًا، نرافق بعضنا البعض، ونتقاسم الفرح وكأننا لا نعرف غيره✨.
منذ أن بدأت الحديث معك، وأنا أشتاق لصوتك، لكلماتك، لضحكتك… كل لحظة بدونك تمر بطيئة، وكل ثانية معك تختصر عمراً من الأمان.
وجودك يمنحني راحة لا أستطيع وصفها… راحة لأنك هنا، وطمأنينة لأنك سعيدة بقربي.
أتمنى من قلبي أن نكمل الطريق معًا، نتقاسم الحياة بكل ما فيها… حلوها ومرّها، وأهم من كل ذلك، أن تكوني دائمًا إلى جانبي… لأن الحياة، في عيني، تبدأ بك🤍.`;

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Amiri', 'Scheherazade New', 'Tajawal', serif",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
        direction: "rtl", // ✅ Arabic layout
      }}
    >
      {/* Background image changes when letter is shown */}
      <div
        style={{
          backgroundImage: `url(${showLetter ? bgImage2 : bgImage1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          transition: "background-image 1s ease-in-out", // ✅ smooth transition
        }}
      ></div>

      {!showLetter ? (
        <>
          <h1
            style={{
              fontSize: "3rem",
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            💌 إلى أغلى شخص في حياتي 💌
          </h1>
          <button
            onClick={() => setShowLetter(true)}
            style={{
              marginTop: "20px",
              padding: "12px 25px",
              fontSize: "1.2rem",
              borderRadius: "20px",
              border: "none",
              background: "rgba(255, 111, 145, 0.9)",
              color: "white",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.2s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            إقرئي رسالتي
          </button>
        </>
      ) : (
        <div
          style={{
            fontSize: "1.3rem",
            lineHeight: 1.8,
            maxWidth: "750px",
            maxHeight: "70vh",
            marginTop: "20px",
            background: "rgba(0, 0, 0, 0.45)",
            padding: "24px",
            borderRadius: "18px",
            textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
          }}
        >
          {letter}
        </div>
      )}
    </div>
  );
}
