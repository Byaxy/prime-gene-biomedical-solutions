import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  Tab,
  Tabs,
} from "@nextui-org/react";

const OurCooperatePolicy = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <div className="w-16 h-2 bg-secondary" />
        <h2 className="text-xl md:text-3xl font-semibold text-primary">
          Our Cooperate Policy
        </h2>
      </div>
      <div>
        <Tabs
          aria-label="Our Cooperate Policy"
          variant="underlined"
          size="lg"
          className="mt-8 text-xl font-semibold bg-primary rounded-lg w-full py-2"
          color="secondary"
        >
          <Tab key="quality" title="Quality">
            <Card>
              <CardBody>
                <Accordion variant="splitted">
                  <AccordionItem
                    key="1"
                    aria-label="General Quality Policy"
                    title="General Quality Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <p>
                      Prime Gene Biomedical Solutions is committed to providing
                      quality products and services that meet customer and
                      regulatory requirements. We establish quality objectives
                      throughout the organization to ensure continued
                      suitability, adequacy and effectiveness of the Quality
                      Management System.
                    </p>
                    <p className="py-4">
                      To continuously improve import and distribute quality
                      products in accordance with the GSA, FDA and the request
                      of our clients and sectoral generally accepted rules in
                      our field of operation; to act in compliance with National
                      and International laws, standards, regulatory
                      requirements.
                    </p>
                    <p>
                      To ensure the continuity and improvement, believing that
                      quality may only be maintained through teamwork, to work
                      with manufacturers and stakeholders with team spirit and
                      common-sense method.
                    </p>
                    <p className="py-4">
                      By working in compliance with the Quality Management
                      System and medical devices directives requirements, to
                      maintain the effectiveness of the system, to follow
                      scientific and technological developments and to ensure
                      the timely transfer of innovation to our business for the
                      improvement of product quality and productivity.
                    </p>
                    <p>
                      By making investments in new national and international
                      areas to fulfil the current and future requirements of our
                      customers, “to provide customer satisfaction at the first
                      time and every time;” to produce quality and safe products
                      in the medical device industry and to provide quality
                      services.
                    </p>
                    <p className="py-4">
                      To maintain established quality systems and by investing
                      in human resources, who constantly develop and renew
                      themselves and to new technological infrastructures, to
                      provide continuity. To provide constant development of
                      personnel in this field and to hold trainings.
                    </p>
                    <p>
                      To maintain competitive power in production and sale of
                      disinfectants used in cleaning of medical instruments.
                    </p>
                    <p className="py-4">
                      To monitor the innovations in the health industry
                      continuously, to continuously increase product range and
                      market share, to provide optimal efficiency and
                      profitability, to be one of the industry leaders and to
                      prevail over its competitors.
                    </p>
                    <p>
                      To provide a healthy and safe working environment to
                      workers, to reinforce the sense of organizational
                      belonging by increasing opportunities of education,
                      communication and motivation.
                    </p>
                    <p className="py-4">
                      To evaluate all factors and conditions, affecting the
                      health and safety of the people affected by the activities
                      of our organization (workers, temporary workers,
                      sub-contractor employees, visitors, clients and any
                      persons in the workplace) and to take necessary measures.
                    </p>
                    <p>
                      To create environmental awareness, to contribute in its
                      preservation and development.
                    </p>
                    <p className="py-4">
                      Quality is The Basis of Values and Dignity! Since Prime
                      Gene Biomedical Solutions establishment, product quality
                      has been as important as its life. In accordance with our
                      quality policy “Quality is the basis of values and
                      dignity”, from the R&D design, procurement quality
                      control, manufacture to the final product inspection, Our
                      Partners have established a whole set of scientific,
                      standardized and strict quality control system in each
                      procedure, to ensure product quality reach the top level.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Quality Management System"
                    title="Quality Management System"
                    className="text-lg text-darkerBlue/80"
                  >
                    <p>
                      Prime Gene Biomedical Solutions implements a Quality
                      Management System and Quality Policy that aligns with the
                      purpose of our global organization as communicated through
                      Prime Gene Biomedical Solutions’ Group Mission and Vision
                      statements.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    key="3"
                    aria-label="Cooperate Responsibility"
                    title="Cooperate Responsibility"
                    className="text-lg text-darkerBlue/80"
                  >
                    <p>
                      Prime Gene Biomedical Solutions’ mission is to contribute
                      to the health and well-being of people all over the world
                      through the advancement of science and the discovery of
                      new technologies. Prime Gene Biomedical Solutions’ vision
                      is for the company and its members to influence society
                      through its sound and legitimate corporate activities.
                      Prime Gene Biomedical Solutions lives by its mission and
                      vision statements to ensure all business practices
                      encourage a positive impact on all stakeholders including
                      employees, suppliers, distribution partners, consumers,
                      communities, and others.
                    </p>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="warranty" title="Warranty">
            <Card>
              <CardBody className="flex flex-col p-5 gap-3 text-lg text-darkerBlue/80">
                <h3 className="py-2 font-semibold text-2xl text-darkerBlue">
                  General Product Warranty Policy
                </h3>
                <p>
                  Prime Gene Biomedical Solutions grants to Buyer the warranty
                  last published by Prime Gene Biomedical Solutions before the
                  time of shipment of the goods. Prime Gene Biomedical Solutions
                  MAKES NO OTHER WARRANTIES TO BUYER, EXPRESS OR IMPLIED, AND
                  HEREBY EXPRESSLY DISCLAIMS ANY WARRANTY OF MERCHANTABILITY OR
                  FITNESS FOR A PARTICULAR PURPOSE.
                </p>
                <p>
                  Complaints shall be made in writing to Prime Gene Biomedical
                  Solutions. With regard to incomplete or incorrect deliveries,
                  complaints shall be notified and claimed without undue delay
                  after delivery and, with regard to notice of defects,
                  complaints shall be made without undue delay after
                  determination of the defect but, at the latest, however, 3
                  days after delivery. Claims of defects of the ordering party
                  shall exist in principle only if the ordering party has
                  properly performed the afore-mentioned examination and
                  objection obligations.
                </p>
                <p>
                  The warranty period corresponds to the expiry date imprinted
                  on the packages, however to a maximum of 12 months after
                  supply. For instruments, spare parts, and pipettes for 12
                  months after date of invoice if no other periods have been
                  earlier agreed. The warranty period excludes disposables and
                  parts subject to wear & tear. If spare parts are installed or
                  repairs carried out inexpertly, no warranty regress can be
                  claimed. Additionally, the instrument warranty will expire
                  immediately if the maintenance procedures detailed in the
                  service manual of the instrument are not carried out as
                  indicated in the intervals prescribed.
                </p>
                <p>
                  Insofar as a defect of the goods exists for which Prime Gene
                  Biomedical Solutions is responsible, Prime Gene Biomedical
                  Solutions shall be obliged, to the exclusion of the ordering
                  party&rsquo;s right to cancel the contract or to reduce the
                  purchase price (reduction), to subsequent performance in order
                  to remedy the defect, unless Prime Gene Biomedical Solutions
                  is entitled to refuse subsequent performance pursuant to the
                  statutory provisions. The ordering party shall grant Prime
                  Gene Biomedical Solutions a reasonable time period within
                  which to undertake subsequent performance.
                </p>
                <p>
                  Subsequent performance can, at the choice of Prime Gene
                  Biomedical Solutions, be undertaken in the form of elimination
                  of the defect (cure) or delivery of new goods. In the case of
                  elimination of the defect (cure), Prime Gene Biomedical
                  Solutions shall bear the necessary costs, insofar as these are
                  not increased because the subject matter of the contract is
                  located at a site other than the place of performance.
                </p>
                <p>
                  If the subsequent performance is unsuccessful, the ordering
                  party can, at 1st choice, demand reduction of the purchase
                  price (reduction) or declare cancellation of the contract. The
                  elimination of the defect (cure) shall be deemed to be
                  unsuccessful upon the second unsuccessful attempt, insofar as,
                  due to the subject matter of the contract, additional
                  elimination of the defect (cure) attempts would not be
                  reasonable and appropriate for the ordering party.
                </p>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="sales" title="Sales">
            <Card>
              <CardBody>
                <Accordion variant="splitted">
                  <AccordionItem
                    key="general-clauses"
                    aria-label="General Clauses"
                    title="General Clauses"
                    className="text-lg text-darkerBlue/80"
                  >
                    <p>
                      The following Terms and Conditions of Sale, Delivery and
                      Payment shall apply for all contracts for the sale of
                      goods concluded between Prime Gene Biomedical Solutions
                      and its customers. They shall also apply for all future
                      business relationships even if not again expressly agreed
                      upon.
                    </p>
                    <p className="py-4">
                      Deviating terms and conditions of the customer which are
                      not expressly recognized by Prime Gene Biomedical
                      Solutions shall not be binding on Prime Gene Biomedical
                      Solutions even if these are not expressly rejected. The
                      following Terms and Conditions of Sale, Delivery and
                      Payment shall also apply in the case that Prime Gene
                      Biomedical Solutions carries out the customer&rsquo;s
                      order without objection and with knowledge of
                      contradictory or deviating terms and conditions of the
                      customer.
                    </p>
                    <p>
                      The contracts set down in writing all agreements which
                      Prime Gene Biomedical Solutions and the customer have made
                      regarding the performance of purchase contracts.
                    </p>
                    <Accordion className="my-5" variant="light">
                      <AccordionItem
                        key="terms-of-agreement"
                        aria-label="Terms of Agreement."
                        title="Terms of Agreement."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Deviating terms and conditions of the customer which
                          are not expressly recognized by Prime Gene Biomedical
                          Solutions shall not be binding on Prime Gene
                          Biomedical Solutions even if these are not expressly
                          rejected. The following Terms and Conditions of Sale,
                          Delivery and Payment shall also apply in the case that
                          Prime Gene Biomedical Solutions carries out the
                          customer&rsquo;s order without objection and with
                          knowledge of contradictory or deviating terms and
                          conditions of the customer.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="time-of-delivery"
                        aria-label="Time of Delivery"
                        title="Time of Delivery."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Prime Gene Biomedical Solutions shall have the right
                          to specify date of delivery, but the deadline for
                          placing orders for same day shipments is 08:00 GMT.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="delivery-in-lots"
                        aria-label="Delivery in Lots."
                        title="Delivery in Lots."
                        className="text-lg text-darkerBlue"
                      >
                        <p>
                          Prime Gene Biomedical Solutions shall have the right
                          to deliver all of the goods at one time or in portions
                          from time to time.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="palce-of-delivery"
                        aria-label="Place of Delivery."
                        title="Place of Delivery."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          The goods shall be delivered at Buyer’s address last
                          known to Prime Gene Biomedical Solutions.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="shipping-terms"
                        aria-label="Shipping Terms."
                        title="Shipping Terms."
                        className="text-lg text-darkerBlue"
                      >
                        <p>
                          Shipping terms are “F.O.B. Destination, freight prepay
                          and add.” This means that Prime Gene Biomedical
                          Solutions pays the freight and adds the freight
                          charges to its invoice to Buyer. Prime Gene Biomedical
                          Solutions retains title and risk of loss while the
                          goods are in transit. Prime Gene Biomedical Solutions
                          selects the carrier. Claims for loss or damage
                          attributable to the carrier are Prime Gene Biomedical
                          Solutions’ responsibility. Buyer must note visible
                          loss or damage on the delivery receipt before signing
                          for the shipment and report claims to Seller within
                          five business days after delivery of shipment.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="fright-collect-and-third-party-orders"
                        aria-label="Freight Collect and Third-Party Orders."
                        title="Freight Collect and Third-Party Orders."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Shipping terms for freight collect and third-party
                          orders are “F.O.B. Origin, freight collect.” This
                          means that Buyer pays and bears freight charges. Buyer
                          assumes title and risk of loss while the goods are in
                          transit. Buyer is entitled to route the shipment.
                          Claims for loss or damage attributable to the carrier
                          are Buyer’s responsibility.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="force-majeure"
                        aria-label="Force Majeure."
                        title="Force Majeure."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Shipping dates are estimated, and Seller shall not be
                          liable for loss or damage due to delay in delivery
                          resulting from any cause beyond its reasonable control
                          including, but not limited to, act of nature (e.g.,
                          earthquakes, extreme weather conditions, such as
                          floods), war or threat of war, terrorist act,
                          blockade, revolution, riot, civil commotion, fire,
                          industrial action/strike, government action, embargo,
                          unavailability of goods, default of suppliers, loss or
                          breakdown of carrying vessel, and any delays resulting
                          from any such cause shall extend the time for delivery
                          correspondingly.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </AccordionItem>
                  <AccordionItem
                    key="pricing-policy"
                    aria-label="Pricing Policy"
                    title="Pricing Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <Accordion variant="light">
                      <AccordionItem
                        key="general-pricing-policy"
                        aria-label="General Pricing Policy"
                        title="General Pricing Policy"
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          The prices charged will be based on the prices valid
                          at the day of delivery/performance unless specifically
                          agreed upon otherwise.
                        </p>
                        <p className="py-4">
                          The said prices shall be prices excluding delivery
                          Costs. The delivery Costs shall additionally be paid
                          by the buyer.
                        </p>
                        <p>
                          Our prices are to be understood excluding V. A. T.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="amount-of-price"
                        aria-label="Amount of Price."
                        title="Amount of Price."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          The price to be paid by Buyer shall be that contained
                          on Prime Gene Biomedical Solutions’ quotation to Buyer
                          (until the expiration date) or on the price list last
                          published by Prime Gene Biomedical Solutions before
                          the time of shipment of the goods.
                        </p>
                        <p className="py-4">
                          The prices set forth there do not include sales or use
                          taxes, duties or fees, or shipping or handling
                          charges.
                        </p>
                        <p>
                          Buyer shall be invoiced those amounts, where the
                          shipping and handling charges shall apply that are
                          last posted on Prime Gene Biomedical Solutions’
                          website before the time of shipment of the goods.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="pricing-and-made-to-order"
                        aria-label="Pricing and Made-To-Order."
                        title="Pricing and Made-To-Order."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          The price to be paid shall be that contained on the
                          price list last published by Prime Gene Biomedical
                          Solutions before the time of shipment of the goods.
                        </p>
                        <p>
                          Pricing is subject to change without notice. Please
                          ask us about volume discounts and special bid prices,
                          standing orders, and custom formulations.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </AccordionItem>
                  <AccordionItem
                    key="ordering-policy"
                    aria-label="Ordering Policy"
                    title="Ordering Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <Accordion variant="light">
                      <AccordionItem
                        key="general-ordering-policy"
                        aria-label="General Ordering Policy"
                        title="General Ordering Policy"
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Offers shall always be given subject to confirmation.
                          Technical data, descriptions, or illustrations of the
                          goods as shown in offers, brochures, or other
                          information material shall not represent any warranted
                          qualities and shall be non-binding and subject to
                          change.
                        </p>
                        <p className="py-4">
                          Orders are accepted by Prime Gene Biomedical Solutions
                          by written confirmation or dispatch of the goods
                          ordered.
                        </p>
                        <p>
                          Prime Gene Biomedical Solutions reserve the right of
                          changes, especially improvements if these will become
                          necessary due to official requirements and/or reasons
                          of consumer protection or reasonable due to
                          rationalization of production procedures if changes
                          are equitable for customer.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="how-to-order"
                        aria-label="How to Order."
                        title="How to Order."
                        className="text-lg text-darkerBlue/80
                        "
                      >
                        <p>There are three ways to order:</p>
                        <ol>
                          <li>
                            Online at www.primegenebiomedicalsolutions.com , 24
                            hours/day and 7 days/week
                          </li>
                          <li>
                            By phone: +233 244364439 (Ghana); +231 775508118
                            (Liberia)
                          </li>
                          <li>
                            By email: info@primegenebiomedicalsolutions.com /
                            sales@primegenebiomedicalsolutions.com
                          </li>
                        </ol>

                        <p className="py-4">
                          Prime Gene Biomedical Solutions generally does not
                          ship out refrigerated items on Friday, unless a
                          Saturday delivery is required.
                        </p>
                        <p>
                          The deadline for same day shipments is 1:30 p.m. for
                          all U.S. time zones (except 11:30 a.m. for Hawaii and
                          12:30 p.m. for Alaska).
                        </p>
                        <p className="py-4">
                          Have the following information ready when calling:
                          Company or facility Name, Address or location, Your
                          “Ship To” Address, Catalog Number, Description of
                          Item, and Quantity of Item.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="customer-service"
                        aria-label="Customer Service."
                        title="Customer Service."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          To meet your ordering needs, Customer Service is
                          available by phone: +233 244364439 (Ghana); +231
                          775508118 (Liberia) and By email:
                          info@primegenebiomedicalsolutions.com /
                          sales@primegenebiomedicalsolutions.com
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="technical-support"
                        aria-label="Technical Support."
                        title="Technical Support."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          To answer your technical questions, Technical Support
                          is available by By phone: +233 244364439 (Ghana); +231
                          775508118 (Liberia) and By email:
                          info@primegenebiomedicalsolutions.com.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="ordering-process"
                        aria-label="Ordering Process."
                        title="Ordering Process."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Where credit is extended, the ordering process follows
                          these steps. First, you, the customer, place an order
                          online or by email, phone.
                        </p>
                        <p className="py-4">
                          Electronic data interchange (EDI) is also an option.
                          Second, Prime Gene Biomedical Solutions ships the
                          goods and sends an invoice back to you.
                        </p>
                        <p>
                          Third, you receive the inventory and send a check or
                          authorize an electronic funds transfer (EFT) to Prime
                          Gene Biomedical Solutions. Please pay from the
                          invoice, as no statement will be sent.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </AccordionItem>
                  <AccordionItem
                    key="payment-policy"
                    aria-label="Payment Policy"
                    title="Payment Policy"
                    className="text-darkerBlue/80"
                  >
                    <h3 className="text-xl text-darkerBlue font-semibold mb-2">
                      General Payment Policy
                    </h3>
                    <div className="flex flex-col gap-4 text-lg text-darkerBlue/80">
                      <p>
                        Invoices are to be settled by payment within 30 days
                        after date of invoice if no other agreements have been
                        fixed in writing. Payment must always be made with the
                        currency indicated on the invoice.
                      </p>
                      <p>
                        Payments shall be deemed to have been made on the day on
                        which Prime Gene Biomedical Solutions has the amounts at
                        its disposal. Payments will in each case be set off
                        against the longest open debt. Prime Gene Biomedical
                        Solutions will not pay any interest on advance payments
                        or payments on account.
                      </p>
                      <p>
                        Cheques will be only accepted on account of payment and
                        under the usual reserve. Bills of exchange will only be
                        accepted following prior agreement and even then only on
                        account of payment and under the usual reserve.
                      </p>
                      <p>
                        In the event of default in payment, the ordering party
                        shall be obliged to pay default interest as of the date
                        of the commencement of default in the amount of 8 % per
                        annum above the respective base interest rate of the of
                        the respective countries (Ghana and Liberia). In
                        addition, Prime Gene Biomedical Solutions shall be
                        entitled to hold back deliveries for other contracts in
                        a reasonable amount and scope or, without prior
                        notification, perform only against payment by cash in
                        advance or cash on delivery.
                      </p>
                      <p>
                        The ordering party can set-off its counterclaims against
                        claims of Prime Gene Biomedical Solutions only if such
                        counterclaims are undisputed or determined with final,
                        res judicata effect. Possible rights of retention can
                        only be claimed insofar as these are based on the same
                        contractual relationship.
                      </p>
                      <p>
                        All still outstanding, suspended claims of Prime Gene
                        Biomedical Solutions shall become immediately payable
                        and due in the event that a deterioration of the
                        economic situation of the ordering party exists for
                        which the ordering party is responsible, the ordering
                        party discontinues making payments, is over-indebted, an
                        application is made for an insolvency proceeding
                        concerning its assets or the ordering party&rsquo;s
                        cheques , bills of exchange are dishonored. In these
                        cases, Prime Gene Biomedical Solutions shall be entitled
                        to demand payment by cash in advance or security or, if
                        the ordering party finally refuses performance of the
                        contract after a demand to do so or, respectively,
                        refuses the provision of security, Prime Gene Biomedical
                        Solutions shall be entitled to cancel the contract and
                        demand damages for non-performance.
                      </p>
                      <p>
                        Where credit is extended, payment is net 30 days from
                        the date of invoice. Unless Buyer is extended credit
                        terms by Prime Gene Biomedical Solutions, Buyer shall
                        pay for the goods after to shipment and inspection of
                        the goods. Buyer is responsible for a 8.0 % finance
                        charge per month on past due accounts and all expenses
                        of collections.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="delivery-policy"
                    aria-label="Delivery Policy"
                    title="Delivery Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <h3 className="text-xl text-darkerBlue font-semibold mb-2">
                      General Delivery Policy
                    </h3>
                    <div className="flex flex-col gap-4 text-lg text-darkerBlue/80">
                      <p>
                        Delivery periods or delivery times shall only be binding
                        if they are expressly confirmed as binding by Prime Gene
                        Biomedical Solutions in writing.
                      </p>
                      <p>
                        Any delivery period shall have been observed if the
                        subject of delivery has been dispatched within this
                        period or, should the dispatch or collection be delayed
                        for reasons for which Prime Gene Biomedical Solutions is
                        not responsible, if notification has been given within
                        the agreed period that the goods are ready for dispatch.
                      </p>
                      <p>
                        A delivery period confirmed in writing shall be extended
                        to a reasonable extent if its non-observance after the
                        contract has been entered into its attributable to force
                        majeure, mobilization, war, riots, strike action,
                        lockouts, seizures, embargoes, lack of raw materials, or
                        the occurrence of other unforeseen hindrances which
                        cannot be remedied by reasonable means and do not fall
                        under the responsibility of Prime Gene Biomedical
                        Solutions.
                      </p>
                      <p>
                        If the delivery becomes impossible in full or in part in
                        the event of non-delivery to Prime Gene Biomedical
                        Solutions itself, for which Prime Gene Biomedical
                        Solutions is not to blame, as a result of force majeure
                        or difficulties for which Prime Gene Biomedical
                        Solutions is not responsible, Prime Gene Biomedical
                        Solutions shall have the right to withdraw from the
                        contract. In this case, the ordering party shall have no
                        rights of compensation or subsequent delivery.
                      </p>
                      <p>
                        Should the ordering party be in default in acceptance,
                        Prime Gene Biomedical Solutions shall be entitled to
                        demand reimbursement of damages which accrue and also
                        any additional expenses. The same shall apply if the
                        ordering party culpably breaches its cooperation
                        obligations.
                      </p>
                      <p>
                        If the underlying purchase contract concerns a
                        transaction for a fixed point in time, Prime Gene
                        Biomedical Solutions shall be liable pursuant to the
                        statutory provisions. In these cases, Prime Gene
                        Biomedical Solutions&apos; liability shall be limited to
                        foreseeable, typically occurring damages if the default
                        in making delivery is not caused by an intentional
                        breach of contract for which Prime Gene Biomedical
                        Solutions is responsible. Prime Gene Biomedical
                        Solutions shall be liable to the same extent in case of
                        default in making delivery pursuant to the statutory
                        provisions if this is caused by intentional or grossly
                        negligent breach of contract for which Prime Gene
                        Biomedical Solutions is responsible.
                      </p>
                      <p>
                        Prime Gene Biomedical Solutions&apos; liability shall be
                        limited to foreseeable, typically occurring damages if
                        the default in making delivery is not caused by
                        intentional breach of contract for which Prime Gene
                        Biomedical Solutions is responsible. Additional
                        liability for default in taking delivery for which Prime
                        Gene Biomedical Solutions is responsible is precluded.
                      </p>
                      <p>
                        Prime Gene Biomedical Solutions shall be entitled to
                        effect partial deliveries. Delivery confirmations are
                        valid only as long as all payments are made in
                        accordance with the agreed-upon payment conditions.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="inspection-policy"
                    aria-label="Inspection Policy"
                    title="Inspection Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <h3 className="text-xl text-darkerBlue font-semibold mb-2">
                      General Product Inspection Policy
                    </h3>
                    <div className="flex flex-col gap-4 text-lg text-darkerBlue/80">
                      <p>
                        Buyer shall accept the merchandise if the merchandise
                        conforms in all material respect to the specifications
                        last published at primegenebiosolutions.com before the
                        time of shipment of the goods.
                      </p>
                      <p>
                        If the merchandise fails to meet these specifications,
                        Buyer shall notify Prime Gene Biomedical Solutions in
                        writing during an inspection period, which shall be five
                        business days following receipt by Buyer of such
                        merchandise.
                      </p>
                      <p>
                        The parties agree that Prime Gene Biomedical Solutions
                        will either replace the merchandise upon its return or,
                        alternatively, credit Buyer’s purchase price for the
                        merchandise upon its return, at Prime Gene Biomedical
                        Solutions’ option, and that this remedy is intended to
                        be the sole and exclusive remedy of Buyer.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="order-cancellation-liability-and-return-policy"
                    aria-label="Order Cancellation Liability and Return Policy"
                    title="Order Cancellation Liability and Return Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <Accordion variant="light">
                      <AccordionItem
                        key="order-cancellation"
                        aria-label="Order Cancellation"
                        title="Order Cancellation"
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          An order once placed with and accepted by Prime Gene
                          Biomedical Solutions can be cancelled only with Prime
                          Gene Biomedical Solutions’ consent and upon terms that
                          will indemnify Prime Gene Biomedical Solutions against
                          loss.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="liability-and-return-of-products"
                        aria-label="Liability and Return of Products."
                        title="Liability and Return of Products."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Prime Gene Biomedical Solutions shall be liable for
                          damages in principle pursuant to the statutory
                          provisions.
                        </p>
                        <p className="py-4">
                          In the case of a slightly negligent breach of
                          essential contract obligations, Prime Gene Biomedical
                          Solutions liability shall, however, be limited to
                          reimbursement of typical, foreseeable damages; in
                          cases of slightly negligent breach of non-essential
                          contract obligations, Prime Gene Biomedical
                          Solutions&apos; liability shall be precluded.
                        </p>
                        <p>
                          The afore-mentioned limitation of liability shall not
                          apply in cases of damages due to injury to life, limb
                          or health.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="limitation-of-liability"
                        aria-label="Limitation of Liability."
                        title="Limitation of Liability."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          The liability of Prime Gene Biomedical Solutions under
                          this Agreement, whether in contract, tort, or
                          otherwise, shall not, except as expressly provided
                          herein, exceed Buyer’s purchase price on which such
                          liability is based.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="exclusion-of-damages"
                        aria-label="Exclusion of Damages."
                        title="Exclusion of Damages."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Prime Gene Biomedical Solutions HEREBY EXCLUDES AND IN
                          NO EVENT SHALL BE LIABLE TO BUYER FOR SPECIAL,
                          INDIRECT, OR CONSEQUENTIAL DAMAGES, INCLUDING BUT NOT
                          LIMITED TO LOST PROFITS.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="product-returns"
                        aria-label="Product Returns."
                        title="Product Returns."
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Except as otherwise provided with respect to the
                          provisions to meet specifications during the
                          inspection period and during the warranty period,
                          Buyer shall not be permitted to return any products
                          without obtaining.(i) The written prior approval of
                          Prime Gene Biomedical Solutions to return such
                          products and (ii) A returned-goods authorization (RGA)
                          number issued by Prime Gene Biomedical Solutions. All
                          returned products will be credited at Buyer’s purchase
                          price. Returns must be received by Prime Gene
                          Biomedical Solutions in original condition.
                        </p>
                        <p className="py-4">
                          Most refrigerated or frozen items will be deemed
                          non-returnable. If an RGA number is issued by Prime
                          Gene Biomedical Solutions, Buyer shall have 14
                          business days from the date of delivery to return
                          non-refrigerated items and seven business days from
                          the date of delivery to return refrigerated items.
                        </p>
                        <p>
                          Refrigerated and frozen returns must be shipped by
                          overnight delivery. The returns are subject to a 25%
                          restocking fee.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </AccordionItem>
                  <AccordionItem
                    key="expiry-dates-and-shelf-life-policy"
                    aria-label="Expiry Dates and Shelf Life Policy"
                    title="Expiry Dates and Shelf Life Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <h3 className="text-xl text-darkerBlue font-semibold mb-2">
                      General Policy
                    </h3>
                    <div className="flex flex-col gap-4 text-lg text-darkerBlue/80">
                      <p>
                        For most of products especially the consumables and the
                        reagents have shelf life indicated on it.
                      </p>
                      <p>
                        Where products that are received with fewer expiration
                        dates than days’ remaining shelf life and are unable to
                        be used within that time, upon notification at time of
                        expiration, Seller will issue credit or replacement for
                        the unused portion.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="risks-bearing-and-insurance-policy"
                    aria-label="Risks Bearing and Insurance Policy"
                    title="Risks Bearing and Insurance Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <h3 className="text-xl text-darkerBlue font-semibold mb-2">
                      General Policy
                    </h3>
                    <div className="flex flex-col gap-4 text-lg text-darkerBlue/80">
                      <p>
                        Loading and shipping shall be carried out, uninsured, at
                        the risk of the ordering party.
                      </p>
                      <p>
                        Prime Gene Biomedical Solutions shall not take back
                        transport packaging and all other packaging in
                        accordance with the Packaging Ordinance. The ordering
                        party shall be responsible for disposal of packaging at
                        its own cost.
                      </p>
                      <p>
                        If dispatch is delayed at the request of or due to the
                        fault of the ordering party, Prime Gene Biomedical
                        Solutions shall store the goods at the cost and risk of
                        the ordering party.
                      </p>
                      <p>
                        In this case, notification of readiness for dispatch
                        shall be deemed to be equivalent of dispatch.
                      </p>
                      <p>
                        At the request and cost of the ordering party, Prime
                        Gene Biomedical Solutions shall insure the delivery with
                        transport insurance.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="reservation-of-title-policy"
                    aria-label="Reservation of Title Policy"
                    title="Reservation of Title Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <h3 className="text-xl text-darkerBlue font-semibold mb-2">
                      General Policy
                    </h3>
                    <div className="flex flex-col gap-4 text-lg text-darkerBlue/80">
                      <p>
                        The goods shall remain property of Prime Gene Biomedical
                        Solutions (goods subject to reservation) until all
                        present or future claims which Prime Gene Biomedical
                        Solutions may have against the ordering party under the
                        business relationship have been fulfilled. Prime Gene
                        Biomedical Solutions&apos; claims shall not become
                        extinct through being absorbed in or through recognition
                        of a current account balance.
                      </p>
                      <p>
                        The ordering party must store the goods subject to
                        reservation of title in a due and proper manner and
                        insure them sufficiently at its cost. The ordering party
                        shall only be entitled to resell such goods in the
                        course of ordinary business either against cash payment
                        or agreement upon a reservation of title. The ordering
                        party shall be prohibited from transferring title of the
                        goods subject to reservations as security for a debt or
                        from pledging them and disposing of them in any other
                        way which trust rates the securing purpose of the
                        reservation of title or renders this more difficult. If
                        execution is levied at the ordering party by third
                        party&apos;s levying execution to the reservation of
                        title the ordering party must notify the levying third
                        party that the goods levied are goods subject to
                        reservation. Any Costs arising from blocking the third
                        party&apos;s access to the goods subject to reservation
                        shall be borne by the ordering party.
                      </p>
                      <p>
                        The ordering party shall carry out any processing of the
                        goods subject to reservation on behalf of Prime Gene
                        Biomedical Solutions without this giving rise to any
                        obligation to Prime Gene Biomedical Solutions. If the
                        goods subject to reservation are processed, combined or
                        mixed with other goods not belonging to Prime Gene
                        Biomedical Solutions, Prime Gene Biomedical Solutions
                        shall be entitled to the co-ownership interest in the
                        new product thus created at the ratio of the value of
                        the goods subject to reservation to the remaining goods
                        processed, at the time such goods are processed,
                        combined or mixed. If the ordering party acquires sole
                        ownership of the new product, it shall grant Prime Gene
                        Biomedical Solutions co-ownership of the new product in
                        relation to the value of the goods subject to
                        reservation, and will keep the new product in safe care
                        for Prime Gene Biomedical Solutions free of charge.
                      </p>
                      <p>
                        The ordering party shall assign to Prime Gene Biomedical
                        Solutions as security now, at this juncture, the claims
                        it will have against its customers arising from any
                        resale or hiring out of the goods subject to
                        reservation, to the extent of the value of the
                        respective goods sold and subject to reservation of
                        ownership, until all claims Prime Gene Biomedical
                        Solutions has from all business relationships with the
                        ordering party have been satisfied. If the prerequisites
                        of para. 1 exist, upon the request of Prime Gene
                        Biomedical Solutions, the ordering party shall notify
                        its debtors of the assignment of claims to Prime Gene
                        Biomedical Solutions. Prime Gene Biomedical Solutions
                        shall be permitted to effect this notification to the
                        third party debtor itself. In addition, after fixing a
                        reasonable deadline, Prime Gene Biomedical Solutions
                        shall be entitled to retrieve the goods subject to the
                        reservation of title for utilization and satisfaction of
                        the remaining debt.
                      </p>
                      <p>
                        The ordering party shall be obliged to provide
                        possession of the goods for Prime Gene Biomedical
                        Solutions and to permit Prime Gene Biomedical Solutions
                        or third persons authorized by Prime Gene Biomedical
                        Solutions access to the business premises during normal
                        business hours. The ordering party shall be entitled, as
                        trustee on account of Prime Gene Biomedical Solutions,
                        to collect the outstanding debt assigned to Prime Gene
                        Biomedical Solutions and to enforce the ancillary
                        rights. The authorization to collect debts and the
                        authority of the ordering party to enforce the
                        subsidiary rights may be revoked if there is an
                        important reason for this, in particular if the ordering
                        party&apos;s financial situation deteriorates
                        substantially.
                      </p>
                      <p>
                        The aforementioned powers, in particular the
                        authorization given to the ordering party to collect the
                        debts related to resale, shall expire automatically even
                        without being expressly revoked if the ordering party
                        does not meet its payment obligations towards Prime Gene
                        Biomedical Solutions, if a judicial insolvency
                        proceeding against the ordering party is opened or the
                        opening of an insolvency proceeding against the ordering
                        party is refused due to absence of assets. The ordering
                        party shall not be entitled to dispose of the claims
                        assigned in any way without prior written consent of
                        Prime Gene Biomedical Solutions.
                      </p>
                      <p>
                        Upon the request of the ordering party, Prime Gene
                        Biomedical Solutions shall be obliged to release
                        securities to which Prime Gene Biomedical Solutions is
                        entitled insofar as the value thereof exceeds the value
                        of Prime Gene Biomedical Solutions&apos; claims against
                        the ordering party from the current business
                        relationship in total by more than 10 %. Prime Gene
                        Biomedical Solutions shall be free to choose which
                        security to release.
                      </p>
                    </div>
                  </AccordionItem>
                  <AccordionItem
                    key="legal-policy"
                    aria-label="Legal Policy"
                    title="Legal Policy"
                    className="text-lg text-darkerBlue/80"
                  >
                    <Accordion variant="light">
                      <AccordionItem
                        key="general-legal-policy"
                        aria-label="General Legal Policy"
                        title="General Legal Policy"
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          This agreement shall be governed by the best
                          international law practice.
                        </p>
                        <p className="py-4">
                          For all disputes, Accra/Monrovia is agreed upon as the
                          place of jurisdiction for merchants entered in the
                          Commercial Register as such, public law entities, or
                          public law separate funds.
                        </p>
                        <p>
                          This shall also apply to actions brought under summary
                          procedure deciding claims arising from a bill of
                          exchange, or to actions brought for the assertion of a
                          claim concerning payment of a cheque.
                        </p>
                        <p className="py-4">
                          This shall furthermore apply in the event of the
                          residence or habitual home of the ordering party being
                          unknown, abroad, or transferred there. United
                          Convention on Contracts for the International Sale of
                          Goods (CISG) is not applicable unless applicability
                          has been agreed in writing.
                        </p>
                      </AccordionItem>
                      <AccordionItem
                        key="subsidiary-conditions-policy"
                        aria-label="Subsidiary Conditions Policy"
                        title="Subsidiary Conditions Policy"
                        className="text-lg text-darkerBlue/80"
                      >
                        <p>
                          Should particular provisions of these Terms and
                          Conditions of Sale, Delivery, and Payment, or parts
                          thereof, be or become invalid, this will not affect
                          either the validity of the remaining conditions and
                          provisions or the validity of the contract entered
                          into with the ordering party.
                        </p>
                        <p className="py-4">
                          A condition coming as near as possible in a way
                          admissible in law to what was intended economically
                          shall be understood to be agreed upon in place of the
                          condition affected.
                        </p>
                        <p>
                          The Terms and Conditions of Sale, Delivery, and
                          Payment and the contracts entered into based on these
                          terms and conditions should be invalid with respect to
                          non-commercial ordering parties, this shall not affect
                          their validity with respect to commercial ordering
                          parties.
                        </p>
                        <p className="py-4">
                          Insofar as individual provisions of the aforesaid
                          provisions should be invalid against a non-commercial
                          ordering party, their validity with regard to
                          commercial ordering parties shall remain unaffected
                          thereby.
                        </p>
                      </AccordionItem>
                    </Accordion>
                  </AccordionItem>
                </Accordion>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default OurCooperatePolicy;
