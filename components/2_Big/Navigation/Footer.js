import { FourFourFour, Grid, Layout, TwoTwoTwo } from "../../1_Small/Base";
import Link from "next/link";

export const Footer = () => {
  return (
    <section id="footer" className="bg-white py-56 lg:py-80">
      <Layout>
        <Grid>
          <FourFourFour c="mb-32 mb:mb-0">
            <h2 className="text-body_regular text-neutral_300 mb-24">
              Renate Rue
            </h2>
            <div className="flex flex-col">
              <div className="flex ">
                <div className="mt-6">{email} </div>
                <a
                  target="blank"
                  href="mailto:renaterue85@gmail.com"
                  className="underline text-neutral_700 mb-8 ml-8"
                >
                  Send meg en mail
                </a>
              </div>
              <div className="flex ">
                <div className="mt-6">{instagram} </div>
                <a
                  target="blank"
                  href="https://www.instagram.com/renaterue/?hl=en"
                  className="underline text-neutral_700 mb-8 ml-8"
                >
                  Følg meg på Instagram
                </a>
              </div>
            </div>
          </FourFourFour>
          <TwoTwoTwo c="md:col-start-6 lg:col-start-10">
            <h2 className="text-body_regular text-neutral_300 mb-24">
              Kategorier
            </h2>
            <div className="flex flex-col">
              <Link href="">
                <a className="underline text-neutral_700 mb-8">
                  Bærekraftig mat
                </a>
              </Link>
              <Link href="">
                <a className="underline text-neutral_700 mb-8">Hverdagsmat</a>
              </Link>
              <Link href="">
                <a className="underline text-neutral_700 mb-8">Mat for barn</a>
              </Link>
            </div>
          </TwoTwoTwo>
        </Grid>
      </Layout>
    </section>
  );
};

const instagram = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
      stroke="#4E4E4E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16 11.3703C16.1234 12.2025 15.9812 13.0525 15.5937 13.7993C15.2062 14.5461 14.5931 15.1517 13.8416 15.53C13.0901 15.9082 12.2384 16.0399 11.4077 15.9062C10.5771 15.7726 9.80971 15.3804 9.21479 14.7855C8.61987 14.1905 8.22768 13.4232 8.09402 12.5925C7.96035 11.7619 8.09202 10.9102 8.47028 10.1587C8.84854 9.40716 9.45414 8.79404 10.2009 8.40654C10.9477 8.01904 11.7977 7.87689 12.63 8.0003C13.4789 8.12619 14.2648 8.52176 14.8716 9.12861C15.4785 9.73545 15.8741 10.5214 16 11.3703Z"
      stroke="#4E4E4E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5 6.5H17.51"
      stroke="#4E4E4E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const email = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
      stroke="#4E4E4E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22 6L12 13L2 6"
      stroke="#4E4E4E"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
