import { Link } from "react-router-dom";
import { h2, h6, p } from "../constants";

const photographCredits = [
  {
    name: "Fluffy",
    photoCredit: "Bella Pisani",
    photoLink:
      "https://unsplash.com/@theria?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/a-cat-laying-in-the-grass-with-its-eyes-closed-DbIqKwRMEgc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Buddy",
    photoCredit: "Helena Lopes",
    photoLink:
      "https://unsplash.com/@wildlittlethingsphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/golden-retriever-walking-on-brown-sand-during-daytime-IBz1XwoAEOY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Whiskers",
    photoCredit: "Vitor Gabriel Carrilho",
    photoLink:
      "https://unsplash.com/@vitorgcarrilho?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/brown-siamese-kitten-EEXatnbZEG4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Rocky",
    photoCredit: "Andy Holmes",
    photoLink:
      "https://unsplash.com/@andyjh07?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/two-rodents-in-a-pile-of-leaves-JmFh2ZsDZK4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Luna",
    photoCredit: "Holger Struck",
    photoLink:
      "https://unsplash.com/@hstruck?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/black-labrador-retriever-on-green-grass-field-during-daytime-EwD9g4eg3jM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Mittens",
    photoCredit: "Petra Bouchalova",
    photoLink:
      "https://unsplash.com/@buchynka?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/white-persian-cat-on-green-grass-during-daytime-3iL2rXnLjWU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Spike",
    photoCredit: "Alexander Naglestad",
    photoLink:
      "https://unsplash.com/@alexandernaglestad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/black-and-tan-german-shepherd-lying-on-green-grass-field-during-daytime-25Q8EO_9Fs8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Nibbles",
    photoCredit: "Gary Bendig",
    photoLink:
      "https://unsplash.com/@kris_ricepees?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/selective-focus-photography-of-brown-rabbit-KvHT4dltPEQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Oscar",
    photoCredit: "Milada Vigerova",
    photoLink:
      "https://unsplash.com/@milada_vigerova?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/russian-blue-cat-on-white-floor-0TPAlZ87mzk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Coco",
    photoCredit: "Leiada Krozjhen",
    photoLink:
      "https://unsplash.com/@leiadakrozjhen?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/a-small-rabbit-in-a-cage-next-to-a-stuffed-animal-VRl0Orjs1UU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Max",
    photoCredit: "Yoav Hornung",
    photoLink:
      "https://unsplash.com/@yoav?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/short-coated-white-and-black-dog-sitting-on-floor-ulGabVbgA6s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Shadow",
    photoCredit: "Simion Andreea-Marina",
    photoLink:
      "https://unsplash.com/@coralineart?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/black-cat-with-green-eyes-skzh-uq3zCI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Bubbles",
    photoCredit: "Timothy Dykes",
    photoLink:
      "https://unsplash.com/@timothycdykes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/black-and-orange-betta-fish-9QjN7BAnBpY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Rusty",
    photoCredit: "Sunira Moses",
    photoLink:
      "https://unsplash.com/@sunira?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/a-small-rodent-peeking-out-of-a-hole-in-a-house-aXK_a0xxmW0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Ginger",
    photoCredit: "Tolga Ahmetler",
    photoLink:
      "https://unsplash.com/@t_ahmetler?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/brown-rabbit-ZWgaqyt1TQc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Leo",
    photoCredit: "Bee Felten-Leidel",
    photoLink:
      "https://unsplash.com/@marigard?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/long-furred-brown-cat-DkYlK2vyuZg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Lily",
    photoCredit: "Dieny Portinanni",
    photoLink:
      "https://unsplash.com/@dienyportinanni?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/white-and-brown-shih-tzu-5QcwI4oxL6g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Nemo",
    photoCredit: "Sebastian Pena Lambarri",
    photoLink:
      "https://unsplash.com/@sebaspenalambarri?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/orange-and-white-clownfish-hiding-in-sea-anemone-poly_hmhwJs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Sunny",
    photoCredit: "Kong Jun",
    photoLink:
      "https://unsplash.com/@ome3?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/selective-focus-photography-of-mouse-9_V3wHZaS68?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
  {
    name: "Misty",
    photoCredit: "Gavin Allanwood",
    photoLink:
      "https://unsplash.com/@gavla?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    unsplashLink:
      "https://unsplash.com/photos/white-and-black-rabbit-on-green-grass-hcxqLJjI99E?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  },
];

const CreditPage = () => {
  return (
    <main className="flex flex-col justify-start p-7">
      <h1 className={`${h2} text-center`}># Credits</h1>
      <h6 className={`${h6} my-6`}>## Photography</h6>

      {photographCredits.map((pet, index) => (
        <div key={index} className="flex gap-2">
          <h6 className={`${h6}`}>{`[${pet.name}] - Photos by `}</h6>
          <Link to={pet.photoLink} target="_blank" rel="noopener noreferrer">
            <p className={`${p} underline underline-offset-2`}>
              {pet.photoCredit}
            </p>
          </Link>
          <span className={h6}>{" on "}</span>
          <Link to={pet.unsplashLink} target="_blank" rel="noopener noreferrer">
            <p className={`${p} underline underline-offset-2`}>unsplash</p>
          </Link>
        </div>
      ))}
    </main>
  );
};

export default CreditPage;
