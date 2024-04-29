import React from "react";
import LandingPageHeader from "components/LandingPageHeader";
import LandingPageFooter from "components/LandingPageFooter";
import FinanceTable from "components/FinaceTable"

const FinancePage = ()=>{
    return (
    <div>
     <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />

        <h1>hello from finance</h1>
        <FinanceTable></FinanceTable>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />

    </div>
    )
};
export default FinancePage;