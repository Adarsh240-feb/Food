import React, { useRef, useState } from 'react';
const bgVideo = "bgvideo.mp4";

const northIndianFoods = [
  {
    name: "Butter Chicken",
    img: "https://media.istockphoto.com/id/2185257273/photo/indian-curry-tikka-masala-chicken-lamb-mutton-rogan-josh-with-rice-and-naan-bread-dark.jpg?s=612x612&w=0&k=20&c=-yHrDXUjpBv0RkD8hP2IQbiW-RNE8L1sQCpv-l09yAA=",
    protein: "27g protein/100g",
    price : "₹300"
  },
  {
    name: "Paneer Tikka",
    img: "https://media.istockphoto.com/id/1995440034/photo/tandoori-paneer-momos.jpg?s=612x612&w=0&k=20&c=wSkeERMGNDqF-Ui-ZSThGqAZnnjxFqex3R7aGzF1Cw8=",
    protein: "18g protein/100g",
    price : "₹250"
  },
  {
    name: "Dal Makhani",
    img: "https://media.istockphoto.com/id/531241066/photo/dal-makhani-or-dal-makhani-or-daal-makhni.jpg?s=612x612&w=0&k=20&c=8v-kdhUeHFAi88Xjqk5faftdxselIH63n9MK6pGax4k=",
    protein: "9g protein/100g",
    price : "₹200"
  },
  {
    name: "Naan",
    img: "https://media.istockphoto.com/id/186862747/photo/garlic-naan-indian-flatbread-pieces.jpg?s=612x612&w=0&k=20&c=ghhGkMmh6qEPSiR5rN3uZz1lanE2sWtBcF28DvD3uY0=",
    protein: "8g protein/100g",
    price : "₹50"
  },
  {
    name: "Chole Bhature",
    img: "https://media.istockphoto.com/id/979914742/photo/chole-bhature-or-chick-pea-curry-and-fried-puri-served-in-terracotta-crockery-over-white.jpg?s=612x612&w=0&k=20&c=OLAw-ZleN1UVaa468OlPSAc6dkz2sjehxWevbvZQNew=",
    protein: "7g protein/100g",
    price : "₹150"
  },
  {
    name: "Rajma Chawal",
    img: "https://media.istockphoto.com/id/669635320/photo/kidney-bean-curry-or-rajma-or-rajmah-chawal-and-roti-typical-north-indian-main-course.jpg?s=612x612&w=0&k=20&c=3ir3vZKHa2oPXkpEKHLbWPAPF1yhxRCyr4DIew41pzg=",
    protein: "8g protein/100g",
    price : "₹180"

  },
  {
    name: "Aloo Paratha",
    img: "https://media.istockphoto.com/id/1951940755/photo/close-up-image-of-indian-breakfast-dish-buffet-triangular-slices-of-aloo-parathas-on-white.jpg?s=612x612&w=0&k=20&c=mpfR51deNx7O621f4q1y_9Fh6sPx5oy7Iz2N1DrvxjQ=",
    protein: "6g protein/100g",
    price : "₹120"
  },
  {
    name: "Tandoori Chicken",
    img: "https://media.istockphoto.com/id/1396604313/photo/roasted-whole-chicken-legs-with-condiment-directly-above-photo.jpg?s=612x612&w=0&k=20&c=JDs72E-fX5SdcBQREta58T82W8zO_rFiKC7d1WwEEUE=",
    protein: "25g protein/100g",
    price : "₹350"
  },
  {
    name: "Lassi",
    img: "https://media.istockphoto.com/id/499515902/photo/rose-lassi.jpg?s=612x612&w=0&k=20&c=pc1QnC0rtM-cewHLz5oMdizhnffKEoz2vPLjQmspQsA=",
    protein: "3g protein/100ml",
    price : "₹60"
  },
];

// Add protein property to other regions as needed
const southIndianFoods = [
  {
    name: "Dosa",
    img: "https://media.istockphoto.com/id/1306083166/photo/masala-sin.jpg?s=612x612&w=0&k=20&c=DLrNS6s3FS6Eygy0vbEk0WY0ROMuEyNde6ttwUv_ObA=",
    protein: "6g protein/100g",
    price : "₹80"
  },
  {
    name: "Vada",
    img: "https://media.istockphoto.com/id/1205482272/photo/medu-wada-with-sambar-and-chutney-south-indian-breakfast-or-snack-dish-on-banana-leaf.jpg?s=612x612&w=0&k=20&c=e0f0_ik1YETKco-jJwbbh3vP_GrOD-oh2KucGSUbQOg=",
    protein: "5g protein/100g",
    price : "₹50"
  },
  {
    name: "Idli",
    img: "https://media.istockphoto.com/id/1424489174/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=ttthhsPnjSnct6CRmVUn3kzHJIbYF2XTWNADMUaktHo=",
    protein: " 3g protein/1pc",
    price : "₹30"
  },
  {
    name: "Pongal",
    img: "https://media.istockphoto.com/id/1319788114/photo/sweet-pongal-indian-festival-food-stock-image.jpg?s=612x612&w=0&k=20&c=ZlmRUcmCGiz0m0EoEt6ovjwr3NK1ljt0-zea7duxlOg=",
    protein: "4g protein/100g",
    price : "₹70"
  },
  {
    name: "Biryani",
    img: "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8=",
    protein: "8g protein/100g",
    price : "₹250"
  },
  {
    name: "Malabar Parotta",
    img: "https://media.istockphoto.com/id/1205482203/photo/kerala-parotta-popularly-known-as-paratha-or-porotta-is-a-delicacy-from-the-state-of-kerala.jpg?s=612x612&w=0&k=20&c=Yv6GQkzNErLM7NUA4q6S27FnFMT7yuC6RSCij5e2m0Y=",
    protein: "6g protein/100g",
    price : "₹40"
  },
  {
    name: "Chicken Chettinad",
    img: "https://media.istockphoto.com/id/1270048186/photo/indian-style-stir-fried-chicken-in-a-white-plate-horizontal-photo.jpg?s=612x612&w=0&k=20&c=ocp0QvDs5kQzXwFvh0hYzejoYaMhxCtBLp2hqasIRpo=",
    protein: "24g protein/100g",
    price : "₹300"
  },
  {
    name: "Coconut Rice",
    img: "https://media.istockphoto.com/id/651030312/photo/coconut-rice-south-indian-one-pot-meal-using-leftover-rice-coconut-and-nuts.jpg?s=612x612&w=0&k=20&c=zBADxbPWwtA4BhqbmW0-a1lNaI77sSaC9afFMU-u8Tc=",
    protein: "3g protein/100g",
    price : "₹100"
  },
  {
    name: "Payasam",
    img: "https://media.istockphoto.com/id/1307741167/photo/choshir-payesh-or-chushi-pitha.jpg?s=612x612&w=0&k=20&c=evK3wSL6vVsP6_zh2XHMM6d5S-_nDA_H5nmMeKUoQ2E=",
    protein: "4g protein/100g",
    price : "₹60"
  },
];
const eastIndianFoods = [
  {
    name: "Macher Jhol",
    img: "https://media.istockphoto.com/id/2162243115/photo/tasty-fish-curry-on-wooden-table-closeup-indian-cuisine.jpg?s=612x612&w=0&k=20&c=oN1PRMhMemfaFTGiKfFhrsjL7ChDLXY6ykdMW-dW8YE=",
    protein: "20g protein/100g",
    price : "₹250"
  },
  {
    name: "Kosha Mangsho",
    img: "https://media.istockphoto.com/id/2209475788/photo/delicious-mutton-curry-in-a-white-bowl-on-a-wooden-background-mutton-bhuna-is-a-very-tasty.jpg?s=612x612&w=0&k=20&c=l8QjHsKbCMMkkhHJcwhLxw10bryFnOjpBaHeKia6t-U=",
    protein: "18g protein/100g",
    price : "₹300"
  },
  {
    name: "Roshogolla",
    img: "https://media.istockphoto.com/id/1044080542/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=tdAE1jz-B43HcrqBL7dLSiV9tTchIVuPqFY0nMwrzrs=",
    protein: " 4g protein/1pc",
    price : "₹20"
  },
  {
    name: "Dalma",
    img: "https://media.istockphoto.com/id/1292579558/photo/dal-khichdi-or-khichadi-tasty-indian-recipe-served-in-bowl-over-rustic-wooden-background-the.jpg?s=612x612&w=0&k=20&c=kKUfczKTYBjyRO8ueoRII7JwA1xdh6QfTmNUUmtLx7Q=",
    protein: "5g protein/100g",
    price : "₹80"
  },
  {
    name: "Momos",
    img: "https://media.istockphoto.com/id/1748107051/photo/veg-steamed-momo-nepalese-traditional-dish-momo-stuffed-with-vegetables-and-then-cooked-and.jpg?s=612x612&w=0&k=20&c=EY_opoDEEhu1_hbyeOcdIg3kZA1Pt7FEOa2vkuJrZTA=",
    protein: "6g protein/100g",
    price : "₹100"
  },
  {
    name: "Aloo Dum",
    img: "https://media.istockphoto.com/id/1421211856/photo/indian-cuisine-paneer-stuffed-dum-aloo-kashmiri-dum-aloo-or-potatoes-in-red-gravy-over-white.jpg?s=612x612&w=0&k=20&c=7D5LHw_ttzHa4y5oLR94VMG9fTc98bYpleK4BOhJ_3U=",
    protein: "4g protein/100g",
    price : "₹70"
  },
  {
    name: "Chingri Macher Malaikari",
    img: "https://media.istockphoto.com/id/1003411832/photo/creamy-shrimp-curry.jpg?s=612x612&w=0&k=20&c=ddGesjoq0GAQ8vZk0flPFZfAEIV7_V7Fgwx24EBH0rA=",
    protein: "24g protein/100g",
    price : "₹350"
  },
  {
    name: "Litti Chokha",
    img: "https://media.istockphoto.com/id/2189780938/photo/litti-chokha-with-raita-and-chutney.jpg?s=612x612&w=0&k=20&c=WJ2Pa3scQg_VPkxei_fC9b3FJWpa2M3MboUVAlDqB-Q=",
    protein: "8.5 protein/100g",
    price : "₹120"
  },
  {
    name: "Dhuska",
    img: "https://media.istockphoto.com/id/1353574092/photo/a-jharkhands-famous-snack-dhuska-with-potato-curry-street-food-of-ranchi-in-the-state-of.jpg?s=612x612&w=0&k=20&c=YblquTc8ozBZ_u-hKQ1uDf7bPBBdoGhKbzpulxilbms=",
    protein: "24g protein/100g",
    price : "₹90"
  },
];
const westIndianFoods = [
  {
    name: "Vada Pav",
    img: "https://media.istockphoto.com/id/2168834306/photo/selective-focus-of-mumbais-famous-street-food-delicious-vada-pav-with-coriander-leave-chutney.jpg?s=612x612&w=0&k=20&c=3Bk8Is7YCMZ_TocPVKT4GGnMKVZMSnDcPzcbuicKMAk=",
    protein: "5g protein/pc",
    price : "₹40"
  },
  {
    name: "Pav Bhaji",
    img: "https://media.istockphoto.com/id/1250269206/photo/image-of-traditional-indian-mumbai-food-pav-bhaji-dish-served-on-patterned-blue-plate-with.jpg?s=612x612&w=0&k=20&c=hbU2WGnn9d5M98nbOtD6AvD87LiPJKSlYbIu0pH74-k=",
    protein: "12 protein/100g",
    price : "₹80"
  },
  {
    name: "Misal Pav",
    img: "https://media.istockphoto.com/id/1442926365/photo/famous-maharashtrian-cuisine-street-food-called-misal-pav-which-includes-spicy-curry-sprouts.jpg?s=612x612&w=0&k=20&c=Kyu46PzZRYb29vCFxmkoBeRHV2dgrTCm1Xz87sILXOM=",
    protein: " 10g protein/1pc",
    price : "₹60"
  },
  {
    name: "Poha",
    img: "https://media.istockphoto.com/id/1302428127/photo/spicy-indian-snack-or-breakfast-poha-with-onion-and-peanuts.jpg?s=612x612&w=0&k=20&c=ToKzZCsB664MKP19zTSVmO7a6mxBBJvoGb5lVIQO_cA=",
    protein: "7g protein/100g",
    price : "₹50"
  },
  {
    name: "Thalipeeth",
    img: "https://media.istockphoto.com/id/1146883910/photo/top-view-of-thalipith-popular-maharashtrian-savory-pancakes-with-curd-and-pudina-chutney.jpg?s=612x612&w=0&k=20&c=RCRA_9FWCwNh3u67qMg5fNa34mO84J1rlUrNqbLPzxE=",
    protein: "12g protein/100g",
    price : "₹70"
  },
  {
    name: "Modak",
    img: "https://media.istockphoto.com/id/1049710886/photo/sweet-modak-made-using-coconut-khoya-and-sugar-popular-maharashtrian-recipe-offered-to-lord.jpg?s=612x612&w=0&k=20&c=KqYRhnB4pcTrJStUdkfKHJHtJ_buZHaxMzONbn40zCk=",
    protein: "10g protein/100g",
    price : "₹30"
  },
  {
    name: "Shrikhand",
    img: "https://media.istockphoto.com/id/2168835508/photo/shrikhand-is-an-indian-sweet-dish-made-of-strained-curd-garnished-with-dry-fruits-and-saffron.jpg?s=612x612&w=0&k=20&c=xlI2JkM6_NosztRVGk8sP90QbxHKcEsp3u9yhzkbm60=",
    protein: "6g protein/100g",
    price : "₹50"
  },
  {
    name: "Aloo Wadi",
    img: "https://media.istockphoto.com/id/1319004079/photo/crispy-green-chilli-pakora-or-mirchi-bajji.jpg?s=612x612&w=0&k=20&c=yUeZZwyGyAxWU9xT1KebPu80xbYFwSAQ820c7h_3kcM=",
    protein: "9g protein/100g",
    price : "₹60"
  },
  {
    name: "Daal Dhokli",
    img: "https://media.istockphoto.com/id/897995190/photo/indian-masala-egg-omelet.jpg?s=612x612&w=0&k=20&c=1GKY9cTDixEdNrS3aI8OUAJykyUev-fwgdlOdeaTpvc=",
    protein: "8 protein/100g",
    price : "₹90"
  },
];


const regions = [
  "North Indian",
  "South Indian",
  "East Indian",
  "West Indian"
];

// Accept addToCart as a prop!
const HomePage = ({ addToCart }) => {
  const cardsRef = useRef(null);
  const [blink, setBlink] = useState(true);
  const [openRegion, setOpenRegion] = useState(null);

  const handleScroll = () => {
    setBlink(false);
    cardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className="homepage-hero"
        style={{
          minHeight: "90vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textAlign: "center"
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "brightness(0.6)"
          }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <h1 style={{ fontSize: "3.5rem", fontWeight: 800, fontStyle: "italic", marginBottom: "0.5rem" }}>
            FlavourFlow 
          </h1>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
            Food Delivery App
          </h2>
          <p style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "2rem" }}>
            Experience fast & easy online ordering<br />on our Website
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={{ height: "56px" }}
              />
            </a>
            <a
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={{ height: "56px" }}
              />
            </a>
          </div>
        </div>
        <button
          onClick={handleScroll}
          className="scroll-down-btn"
          style={{
            position: "absolute",
            bottom: "24px",
            left: 0,
            right: 0,
            margin: "0 auto",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "1.1rem",
            cursor: "pointer",
            outline: "none",
            animation: blink ? "blink 1.2s infinite" : "none",
            zIndex: 2
          }}
        >
          Scroll down ↓
        </button>
      </div>

      {/* Cards Section */}
      <section ref={cardsRef} style={{ background: "#fafbfc", minHeight: "60vh", padding: "64px 0" }}>
        <h2 style={{
          color: "#ff8800",
          textAlign: "center",
          fontWeight: 800,
          fontSize: "2.2rem",
          marginBottom: "2.5rem",
          letterSpacing: "1px"
        }}>
          Hungry? Select across the Nation ! 
        </h2>
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap"
        }}>
          {regions.map(region => (
            <div
              key={region}
              style={{
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                padding: "2.5rem 2.5rem",
                minWidth: "220px",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#222",
                transition: "transform 0.2s",
                cursor: "pointer"
              }}
              onMouseOver={e => e.currentTarget.style.transform = "translateY(-8px) scale(1.04)"}
              onMouseOut={e => e.currentTarget.style.transform = "none"}
              onClick={() => setOpenRegion(region === openRegion ? null : region)}
            >
              {region}
            </div>
          ))}
        </div>

        {/* Big card for North Indian */}
        {openRegion === "North Indian" && (
          <div
            style={{
              margin: "48px auto 0 auto",
              maxWidth: "900px",
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "2.5rem",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#ff8800", marginBottom: "2rem" }}>
              North Indian Specials
            </h3>
            <div style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              {northIndianFoods.map(food => (
                <div
                  key={food.name}
                  style={{
                    background: "#fafbfc",
                    borderRadius: "16px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    width: "180px",
                    padding: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  className="food-card"
                >
                  <img
                    src={food.img}
                    alt={food.name}
                    style={{
                      width: "100%",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "1rem"
                    }}
                  />
                  <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.7rem" }}>
                    {food.name}
                  </div>
                  <div style={{ fontWeight: 500, color: "#ff8800", marginBottom: "0.7rem" }}>
                    {food.price}
                  </div>
                  <button
                    style={{
                      background: "#ff8800",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.5rem 1.2rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "1rem"
                    }}
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  </button>
                  <span className="protein-tooltip">{food.protein}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Big card for South Indian */}
        {openRegion === "South Indian" && (
          <div
            style={{
              margin: "48px auto 0 auto",
              maxWidth: "900px",
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "2.5rem",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#ff8800", marginBottom: "2rem" }}>
              South Indian Specials
            </h3>
            <div style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              {southIndianFoods.map(food => (
                <div
                  key={food.name}
                  style={{
                    background: "#fafbfc",
                    borderRadius: "16px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    width: "180px",
                    padding: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  className="food-card"
                >
                  <img
                    src={food.img}
                    alt={food.name}
                    style={{
                      width: "100%",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "1rem"
                    }}
                  />
                  <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.7rem" }}>
                    {food.name}
                  </div>
                  <div style={{ fontWeight: 500, color: "#ff8800", marginBottom: "0.7rem" }}>
                    {food.price}
                  </div>
                  <button
                    style={{
                      background: "#ff8800",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.5rem 1.2rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "1rem"
                    }}
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  </button>
                  <span className="protein-tooltip">{food.protein}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Big card for East Indian */}
        {openRegion === "East Indian" && (
          <div
            style={{
              margin: "48px auto 0 auto",
              maxWidth: "900px",
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "2.5rem",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#ff8800", marginBottom: "2rem" }}>
              East Indian Specials
            </h3>
            <div style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              {eastIndianFoods.map(food => (
                <div
                  key={food.name}
                  style={{
                    background: "#fafbfc",
                    borderRadius: "16px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    width: "180px",
                    padding: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  className="food-card"
                >
                  <img
                    src={food.img}
                    alt={food.name}
                    style={{
                      width: "100%",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "1rem"
                    }}
                  />
                  <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.7rem" }}>
                    {food.name}
                  </div>
                  <div style={{ fontWeight: 500, color: "#ff8800", marginBottom: "0.7rem" }}>
                    {food.price}
                  </div>
                  <button
                    style={{
                      background: "#ff8800",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.5rem 1.2rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "1rem"
                    }}
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  </button>
                  <span className="protein-tooltip">{food.protein}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Big card for West Indian */}
        {openRegion === "West Indian" && (
          <div
            style={{
              margin: "48px auto 0 auto",
              maxWidth: "900px",
              background: "#fff",
              borderRadius: "24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              padding: "2.5rem",
              textAlign: "center"
            }}
          >
            <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#ff8800", marginBottom: "2rem" }}>
              West Indian Specials
            </h3>
            <div style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center"
            }}>
              {westIndianFoods.map(food => (
                <div
                  key={food.name}
                  style={{
                    background: "#fafbfc",
                    borderRadius: "16px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    width: "180px",
                    padding: "1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer"
                  }}
                  className="food-card"
                >
                  <img
                    src={food.img}
                    alt={food.name}
                    style={{
                      width: "100%",
                      height: "110px",
                      objectFit: "cover",
                      borderRadius: "12px",
                      marginBottom: "1rem"
                    }}
                  />
                  <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.7rem" }}>
                    {food.name}
                  </div>
                  <div style={{ fontWeight: 500, color: "#ff8800", marginBottom: "0.7rem" }}>
                    {food.price}
                  </div>
                  <button
                    style={{
                      background: "#ff8800",
                      color: "#fff",
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.5rem 1.2rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: "1rem"
                    }}
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  </button>
                  <span className="protein-tooltip">{food.protein}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Blinking animation and protein tooltip CSS */}
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
          }
          .food-card .protein-tooltip {
            visibility: hidden;
            opacity: 0;
            background: #222;
            color: #fff;
            text-align: center;
            border-radius: 8px;
            padding: 6px 14px;
            position: absolute;
            bottom: 70px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.95rem;
            font-weight: 500;
            z-index: 10;
            transition: opacity 0.2s;
            pointer-events: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.13);
          }
          .food-card:hover .protein-tooltip {
            visibility: visible;
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default HomePage;