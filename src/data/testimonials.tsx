import { Testimonials } from "@definitions/definitions";

import SkillsIcons from "@icons/SkillsIcons/SkillsIcons";

export const testimonials: Testimonials[] = [
  {
    id: "-lyNqiF",
    name: "Gagnant du prix 'Best Purpose'",
    position: "Hackathon 4e édition",
    company: "Odoo",
    skills: (
      <>
        <SkillsIcons kind="react" />
        <SkillsIcons kind="nodejs" />
        <SkillsIcons kind="docker" />
      </>
    ),
    text: "Avec mon équipe, nous avons du réaliser une application autour du thème 'UI Without Almost Any Text'. Nous sommes parti sur l'idée de faire une plateforme iconographique accompagnant les jeunes enfants atteints de TDAH dans une multitude d'activités diverses (association de paires, coloriage, méditation, ...). ",
    link: "https://www.linkedin.com/in/loic-calcagno/",
    companyImg : "assets/img/odoo.webp"
  },
  {
    id: "FwBe!HU",
    name: "Damien Vercammen",
    position: "Directeur 4.0",
    company: "I-care",
    skills: (
      <>
        <SkillsIcons kind="python" />
      </>
    ),
    text: "Durant son stage de 3 mois chez I-care, Loïc a été confronté à des problématiques/demandes directement en lien avec les besoins d'utilisateurs de chez I-care. Ceci lui a permit de mettre à l'épreuve ses compétences de développement ainsi que d'échange avec les collègues. Au final, sa solution en lien avec du Data Engineering et du NLP est aujourd'hui utilisée activement chez I-care et a permit d'apporter une réponse à un réel besoin. Que cela soit pour son côté humain ou sa volonté d'apprendre des nouvelles choses, je recommande Loïc pleinement et lui souhaite de trouver un travail où il s'épanouira pleinement!",
    link: "https://www.linkedin.com/in/loic-calcagno/",
    companyImg : "assets/img/icare.webp"
  },
];
