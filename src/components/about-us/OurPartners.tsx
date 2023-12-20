import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import LogoSlider from "./LogoSlider";
import { partners } from "@/lib/data/partners";

const europe = partners.filter(
  (partner) => partner.continent.toLowerCase() === "europe"
);
const asia = partners.filter(
  (partner) => partner.continent.toLowerCase() === "asia"
);
const northAmerica = partners.filter(
  (partner) => partner.continent.toLowerCase() === "north america"
);

const OurPartners = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="w-16 h-2 bg-secondary" />
        <h2 className="text-xl md:text-3xl font-semibold text-primary">
          Our Esteemed Partners
        </h2>
      </div>
      <Tabs
        aria-label="Our Cooperate Policy"
        variant="underlined"
        size="lg"
        className="mt-8 text-xl font-semibold bg-primary rounded-lg w-full py-2"
        color="secondary"
      >
        <Tab key="europe" title="Europe">
          <Card>
            <CardBody>
              <LogoSlider logos={europe} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="asia" title="Asia">
          <Card>
            <CardBody>
              <LogoSlider logos={asia} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="north-america" title="North America">
          <Card>
            <CardBody>
              <LogoSlider logos={northAmerica} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </>
  );
};

export default OurPartners;
