import React from "react";

import Carousel from "../components/Carousel";

export default { title: "Carousel" };

const items = [
  {
    node: {
      id: "7549aa30-c446-5460-9d23-5205b4f2df42",
      frontmatter: {
        image: {
          publicURL:
            "/static/jakob-owens-235219-unsplash-efffe88a49d859a3f3d67c14936feb0d.jpg"
        },
        path: "/products/backpack",
        title: "Balderdash Backpack",
        date: "18 November 2018"
      },
      excerpt:
        "Wolf incididunt authentic fam kale chips kitsch. Consectetur blog schlitz\nlive-edge elit helvetica man bun cliche kombucha mixtape semiotics…"
    }
  },
  {
    node: {
      id: "df5acc7e-1f37-59c1-a103-9fc37fc656ee",
      frontmatter: {
        image: {
          publicURL:
            "/static/pavel-fertikh-113220-unsplash-9da2e94eca4870f1e757510420c11fc9.jpg"
        },
        path: "/products/camera",
        title: "Curious Camera",
        date: "18 November 2018"
      },
      excerpt:
        "Disrupt air plant pop-up, lo-fi ugh tilde man bun tumblr pinterest forage man\nbraid tote bag jianbing. Aliqua in direct trade, bicycle…"
    }
  },
  {
    node: {
      id: "52a16cc4-0701-563e-931b-04216850eb42",
      frontmatter: {
        image: {
          publicURL:
            "/static/mink-mingle-424587-unsplash-dbc283fc5297d9cbe71ff62cfbfaa32a.jpg"
        },
        path: "/products/bug",
        title: "Bumbling Bug",
        date: "18 November 2018"
      },
      excerpt:
        "Chambray offal wayfarers hoodie everyday carry photo booth, narwhal schlitz put\na bird on it tumblr. Art party mustache williamsburg laborum…"
    }
  },
  {
    node: {
      id: "2792e61c-7b2b-5fef-9b38-bbbf70a654e3",
      frontmatter: {
        image: {
          publicURL:
            "/static/malte-wingen-381988-unsplash-6bd091a6b89f8349b7e62ddedb203f27.jpg"
        },
        path: "/products/headphones",
        title: "Hallucinogenic Headphones",
        date: "18 November 2018"
      },
      excerpt:
        "Dreamcatcher hoodie fashion axe quis helvetica tilde. Id meditation try-hard\npaleo distillery dolore laboris hell of af biodiesel iPhone…"
    }
  },
  {
    node: {
      id: "2dc502b2-ca96-559e-ba9d-301387e55f5d",
      frontmatter: {
        image: {
          publicURL:
            "/static/paul-gaudriault-661082-unsplash-2a05a75f2c8353f1891988dfbb3c4c80.jpg"
        },
        path: "/products/sneakers",
        title: "Sensitive Sneakers",
        date: "18 November 2018"
      },
      excerpt:
        "Offal dolor et portland cillum succulents occaecat gluten-free keffiyeh jean\nshorts sartorial. Sint occaecat proident, etsy plaid salvia…"
    }
  },
  {
    node: {
      id: "ecd0fa51-a4f9-515a-80ab-545dce4809ad",
      frontmatter: {
        image: {
          publicURL:
            "/static/galina-n-200668-unsplash-c37eb8a8e2b7a06053860bd0deaf8cb5.jpg"
        },
        path: "/products/plant",
        title: "Petrochemical Plant",
        date: "18 November 2018"
      },
      excerpt:
        "Esse tofu scenester, aliquip sunt franzen squid keffiyeh poke excepteur eu\nbiodiesel venmo dreamcatcher. Ut tempor commodo aute. VHS copper…"
    }
  }
];

export const Single = () => {
  return <Carousel items={items} />;
};
