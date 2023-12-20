import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

const OurPhilosophy = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="w-16 h-2 bg-secondary" />
        <h2 className="text-xl md:text-3xl font-semibold text-primary">
          Our Philosophy
        </h2>
      </div>
      <div>
        <Tabs
          aria-label="Our Philosophy"
          variant="underlined"
          size="lg"
          className="mt-8 text-xl font-semibold bg-primary rounded-lg w-full py-2"
          color="secondary"
        >
          <Tab key="vision" title="Vision">
            <Card>
              <CardBody className="flex flex-col p-5 gap-3 text-lg text-darkerBlue/80">
                <p>
                  Prime Gene Biomedical Solutions is dedicated to providing
                  better healthcare products and solutions for all humanities
                  through advance medical technologies to make healthcare more
                  accessible.
                </p>
                <p>
                  We benchmark in whatever we do thereby, reckon a new thrust
                  from time to time and provide us the occupation we are in,
                  that is &quot;in the service of Humanity &quot;.
                </p>
                <p>
                  We are Dedicated to providing professional products and
                  services in the pursuit of friendly and convenient user
                  experience. We strive to enhance people’s well-being and
                  fulfil shared dream of our staff, customers and partners.
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="mision" title="Mision">
            <Card>
              <CardBody className="flex flex-col p-5 gap-3 text-lg text-darkerBlue/80">
                <p>
                  We are committed to importing and distributing the finest
                  healthcare care products and solutions, as we partner with the
                  giants in the manufacturing healthcare products
                </p>
                <p>
                  Importing and distribution of eco-friendly and high-quality
                  products that are appropriate for principles of medical device
                  regulation.
                </p>
                <p>
                  To Create customers who engage with our brand, providing the
                  essential equipment which will render service to increase the
                  standard of living and community health level.
                </p>
                <p>
                  To offer the range of highest quality products of medical
                  products and solutions to enhance the quality healthcare
                  delivery and equally add value to life.
                </p>
                <p>
                  To provide one-stop solution for medical, laboratory, Teaching
                  and Research institutions.
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="core-values" title="Core Values">
            <Card>
              <CardBody className="flex flex-col p-5 gap-3 text-lg text-darkerBlue/80">
                <p className="text-darkBlueText">
                  We struggle for our goals with full passion to meet every
                  customer’s needs; We respect and tolerate our customer to
                  encourage every customer’s progresses; We dare to win and
                  behave to ensure every customer’s successes. We strive for
                  excellence to safeguard everyone’s health. Indeed we strive
                  for “Legacy of Quality Par Excellence”
                </p>
                <ol className="text-darkBlue list-decimal pl-6">
                  <li>
                    <h4 className="font-semibold pb-1 pt-4 text-lg">
                      Our Customers…
                    </h4>
                    <p className="text-darkBlueText">
                      Partner with our customers to diagnose and prevent
                      disease, and promote healthy living. Provide unmatched
                      service for our customers, as we supply them with what
                      they need, when they need it, at a fair price. We will
                      sell the way we want to be sold to - with impeccable
                      integrity and will continually be aware that many people
                      throughout the world depend on us for their health and
                      well-being.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold pb-1 pt-4 text-lg">
                      Our Products…
                    </h4>
                    <p className="text-darkBlueText">
                      Create dependable products of superior quality, knowing
                      that this is best accomplished by strict adherence to
                      company SOP&apos;s. Continuously improve the performance
                      of our products and the efficiency of our processes.
                      Discover new and innovative products to meet our
                      customers’ changing needs more thoroughly.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold pb-1 pt-4 text-lg">
                      Our Workplace…
                    </h4>
                    <p className="text-darkBlueText">
                      Nourish a culture of excellence in all we do. Create a
                      beautiful, clean, comfortable, and safe workplace while
                      providing opportunities for recreation, exercise, and
                      social interaction. Support a variety of charitable causes
                      to strengthen and support our community.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold pb-1 pt-4 text-lg">
                      Our Co-Workers…
                    </h4>
                    <p className="text-darkBlueText">
                      Encourage personal, mental, and spiritual growth for the
                      whole person - both on and off the job. Provide continuing
                      education and advancement opportunities to stimulate
                      personal development. Encourage honesty, integrity and a
                      strong work ethic to promote personal, as well as company
                      success.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold pb-1 pt-4 text-lg">
                      Our Management…
                    </h4>
                    <p className="text-darkBlueText">
                      Respect and treat all co-workers with fairness and equal
                      opportunity, while recognizing that skills and abilities
                      vary. Coach towards improved individual performance, while
                      promoting good teamwork, and emphasize that &quot;Together
                      Everyone Achieves More.&quot;
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold pb-1 pt-4 text-lg">
                      Our Rewards…
                    </h4>
                    <p className="text-darkBlueText">
                      Share in the financial rewards of business ownership. We
                      monitor our Critical Numbers through Open Book Management
                      as we strive to return a profit, thus rewarding all
                      Customers for their diligence in having created that
                      profit. As part-owners of the company, we have a “stake in
                      the outcome,” which provides even more motivation to
                      consistently please our customers and fulfil our mission.
                    </p>
                  </li>
                </ol>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default OurPhilosophy;
