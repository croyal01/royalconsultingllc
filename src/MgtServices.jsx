import React from 'react';

const MgtServices = () => {
    const CompName="Services";
    const cn = "Service-odd";
    const cn2 = "Service-even";
return (
   
    <div style={{marginLeft:'5%', marginRight:'5%', border:'1px'}}>
        <h2>{CompName}</h2>
        <p  style={{marginLeft:'5%', marginRight:'5%'}}> Royal Consulting works with property owner and tenants to help protect your investment. 
            Part of our property management services is to provide property inspections and regular maintenance.
            Royal Consulting is a family run property management company that has been in operation for 3+ years.
            We work with local realtors, real estate brokers, tenants and landlords to help property owners to 
            maximize their profits and tenants acquire affordable housing. If you would like to know more about our services please contact us, 
            we look forward to hearing from you.
        </p>
        <p  style={{marginLeft:'5%', marginRight:'5%'}}>
            <h3>Rent Collection</h3>
            <p className={cn} style={{marginLeft:'5%', marginRight:'5%'}}>We collect the rent every month and direct deposit it to you on the 15th.
            We pay the Utility bills, taxes, and the mortgage and all the monthly accounting. </p>

            <h3>
                Inspections
            </h3>
            <p className={cn2} style={{marginLeft:'5%', marginRight:'5%'}}>We want to make sure your property stays in top shape, so we conduct periodic inspections to ensure the tenants are maintaining your property as required.
               We also attend all necessary municipal inspections for you as well.
            </p>

            <h3>
                Tenant Placement
            </h3>
            <p className={cn} style={{marginLeft:'5%', marginRight:'5%'}}>We market your rental properties, coordinate and attend all of the showings, identify the best applicants, and draft and execute the lease for you.
            We screen all tenants for credit, criminal, and eviction history to try and get you the best tenants possible. </p>
            
            <h3 >Reporting</h3>
            <p className={cn2} style={{marginLeft:'5%', marginRight:'5%'}}>We send you an itemized owner's statement each month detailing all the income and expenses associated with your property. 
                You also have 24/7 access to all your property information by logging in to the owner portal. </p>

            <h3>Maintenance</h3>
            <p className={cn} style={{marginLeft:'5%', marginRight:'5%'}}>We manage all property maintenance and offer you unbeatable pricing and service.
                We have an extensive network of contractors that can tackle any repair. Whether it is fixing a leaky faucet or a complete renovation, we can coordinate it all.
                That means no tenants calling you at all hours of the day asking for maintenance.
            </p>
            <h3>Compliance</h3>
            <p className={cn2} style={{marginLeft:'5%', marginRight:'5%'}}>
            We make sure you and your property stay up to date with all licensing requirements and comply with all local, state and deferral laws. 
            Our leases are clear, concise, attorney reviewed and enforceable in court.
            We keep accurate ledgers of all tenant deposits and payments.
            </p>

            <h3>Payments</h3>
            <p className={cn} style={{marginLeft:'5%', marginRight:'5%'}}>
                You will be directed to a third party site to submit your payment. <br />
                <a href="https://www.rentspree.com/dashboard/rent-payments" alt="Payments" >Payments to Royal Consulting LLC doing business as Royal Managed Propeties.</a>
            </p>
        </p>
    </div>
);
}
export default MgtServices;
