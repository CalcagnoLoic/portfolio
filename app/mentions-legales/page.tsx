import { bellefair, sofia } from "../ui/fonts";
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site Portfolio de Loïc Calcagno.",
};

const MentionsLegales = () => {
  return (
    <div className="text-primary hero-section">
      <Link
        href="/"
        className={`button text-accent mt-12 block w-fit bg-[linear-gradient(to_right,#FFCA74,#FFD798)] text-lg ${bellefair.className}`}
      >
        Retour sur le portfolio
      </Link>

      <h1
        className={`relative z-20 mt-8 text-center text-3xl font-bold [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)] ${sofia.className}`}
      >
        Mentions Légales
      </h1>
      {/* <div className="bg-accent-yellow-light absolute left-1/2 z-10 mb-4 h-1 w-56 -translate-x-16"></div> */}

      <section className="my-6">
        <h2 className="mb-2 text-xl font-semibold underline">
          Éditeur du site
        </h2>
        <p>
          Le présent site est édité par : <strong>Calcagno Loïc</strong>.<br />
          Pour toute question ou demande, vous pouvez me contacter par{" "}
          <a
            href="mailto:calcagnoloic93@gmail.com"
            className="text-accent-yellow-light font-semibold hover:italic"
          >
            email{" "}
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold underline">Hébergement</h2>
        <p>
          Ce site est hébergé par : <strong>Vercel</strong>, plateforme
          d’hébergement fiable et sécurisée.
          <br />
          Vous pouvez consulter leur site ici :{" "}
          <a
            href="https://www.vercel.com"
            className="text-accent-yellow-light font-semibold hover:italic"
            target="_blank"
          >
            Vercel
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold underline">
          Collecte des données personnelles
        </h2>
        <p>
          Ce site ne collecte aucune donnée personnelle de manière automatique.
          <br />
          Cependant, les informations que vous envoyez via le formulaire de
          contact (nom, email, message) sont utilisées uniquement pour répondre
          à vos demandes et ne sont pas conservées une fois le traitement
          effectué. Ce traitement est effectué via{" "}
          <a
            href="https://www.emailjs.com"
            target="_blank"
            className="text-accent-yellow-light font-semibold hover:italic"
          >
            EmailJS
          </a>
          , un service sécurisé dédié aux échanges par email.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-xl font-semibold underline">
          Propriété intellectuelle
        </h2>
        L’ensemble des contenus de ce site (textes, images, code, design)
        appartient à Calcagno Loïc, sauf mention contraire. Ils sont librement
        utilisables et modifiables, y compris à des fins commerciales, sous
        réserve de conserver la mention d’origine.
        <p>
          Les projets réalisés dans le cadre de défis{" "}
          <strong>Frontend Mentor</strong> sont utilisés conformément aux
          conditions d’utilisation de la plateforme, et leur utilisation
          respecte les règles spécifiées par Frontend Mentor. Pour plus
          d’informations, vous pouvez consulter leur site web.
        </p>
      </section>

      <span className="mb-5 block text-base italic">
        Dernière modification: le 17 mars 2025
      </span>
    </div>
  );
};

export default MentionsLegales;
