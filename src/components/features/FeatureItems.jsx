import React, { useState } from 'react'

function FeatureItems() {

  const [featureItem] = useState([
    {
      id: 1,
      title: "Easy Payments",
      text: "Id mollis consectetur congue egestas egestas suspendisse blandit justo.",
      icon: "/payment-icon.svg",
      alt: "Payment icon"
    },
    {
      id: 2,
      title: "Data Security",
      text: "Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.",
      icon: "/shield-icon.svg",
      alt: "Shield icon"
    },
    {
      id: 3,
      title: "Cost Statistics",
      text: "Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.",
      icon: "/support-icon.svg",
      alt: "Statistics icon"
    },
    {
      id: 4,
      title: "Support 24/7",
      text: "A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.",
      icon: "/statistics-icon.svg",
      alt: "Support icon"
    },
    {
      id: 5,
      title: "Regular Cashback",
      text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.",
      icon: "/cashback-icon.svg",
      alt: "Cashback icon"
    },
    {
      id: 6,
      title: "Top Standards",
      text: "Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.",
      icon: "/happy-icon.svg",
      alt: "Happyface icon"
    }
  ]);

  return (
    <>
      {featureItem.map((item) => (
        <div className="feature" key={item.id}>
          <img src={item.icon} alt={item.alt} />
          <div>
            <h3 className="s-heading">{item.title}</h3>
            <p className="m-font">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default FeatureItems