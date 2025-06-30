function generateCertificate(){
    const name = document.querySelector("#studentName").value;
    
    const symbolNo = document.querySelector("#symbolNo").value;
    
    const dob = document.querySelector("#dob").value;
    
    const schoolName = document.querySelector("#schoolName").value;

    document.querySelector(".certName").textContent =name;
    document.querySelector(".certSymbolNo").textContent =symbolNo;
    document.querySelector(".certDob").textContent =dob;
    document.querySelector(".certSchoolName").textContent =schoolName;
}