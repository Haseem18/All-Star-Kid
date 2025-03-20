const data = [
  { name: "M. SAAD", size: 36, no: 99, status: "Half" },
  { name: "M. SAALIF", size: 36, no: 11, status: "Half" },
  { name: "AAYAN", size: 40, no: 17, status: "Full" },
  { name: "MUEEZ", size: 28, no: 7, status: "Half" },
  { name: "PATHAN", size: 44, no: 1, status: "Half" },
  { name: "ZAFIR", size: 42, no: 11, status: "Half" },
  { name: "SARJIL", size: 40, no: 8, status: "Half" },
  { name: "AMMU", size: 38, no: 14, status: "Half" },
  { name: "MEHRAN", size: 40, no: 45, status: "Half" },
  { name: "M_K_D_M_", size: 48, no: 19, status: "Half" },
  { name: "FARHAN", size: 44, no: "05", status: "Half" },
  { name: "DANISH", size: 45, no: 67, status: "Half" },
  { name: "QAIS", size: 42, no: "05", status: "Half" },
  { name: "SAMI", size: 44, no: "09", status: "Half" },
  { name: "TAHA", size: 38, no: 18, status: "Half" },
  { name: "SAM...", size: 42, no: "05", status: "Full" },
  { name: "SURAKHA", size: 42, no: "16", status: "Full" },
  { name: "FATIMA AMINA", size: 44, no: 10, status: "Half" },
  { name: "RUHAN", size: 44, no: "01", status: "Half" },
  { name: "IBRAHIM", size: 38, no: 17, status: "Half" },
  { name: "ILAF", size: 40, no: 25, status: "Half" },
  { name: "SAFWAN", size: 42, no: 24, status: "Half" },
  { name: "MUHAMMAD", size: 22, no: 29, status: "Half" },
  { name: "INAAYA", size: 24, no: 28, status: "Half" },
  { name: "M. HANIF", size: 38, no: 10, status: "Half" },
  { name: "RUHAN", size: 38, no: 7, status: "Half" },
  { name: "M. SAAD", size: 36, no: 12, status: "Half" },
  { name: "FARMAN", size: 38, no: "03", status: "Half" },
  { name: "ABDUL REHMAN", size: 36, no: 34, status: "Half" },
  { name: "AFFAN", size: 40, no: 12, status: "Half" },
  { name: "ABDULLAH", size: 32, no: 55, status: "Half" },
  { name: "HASEEM", size: 38, no: 19, status: "Half" },
  { name: "NIHAL", size: 38, no: 31, status: "Full" },
  { name: "SIYAN", size: 34, no: 12, status: "Half" },
  { name: "ABDUL REHMAN", size: 38, no: 10, status: "Full" },
  { name: "NAQEEB", size: 34, no: 20, status: "Full" },
  { name: "M. SUHAAN", size: 32, no: 29, status: "Half" },
  { name: "ADYAAN", size: 30, no: 13, status: "Half" },
  { name: "ILHAM", size: 34, no: "07", status: "Half" },
  { name: "AASHU", size: 26, no: "03", status: "Full" },
  { name: "ALI", size: 28, no: 7, status: "Half" },
  { name: "ATIF", size: 40, no: "07", status: "Half" },
  { name: "AFAAN", size: 36, no: 7, status: "Full" },
  { name: "SIFAN", size: 22, no: 12, status: "Half" },
  { name: "SURAN", size: 38, no: 08, status: "Half" },
  { name: "YUSUF", size: 26, no: 18, status: "Half" },
  { name: "RUQAIYA", size: 32, no: "07", status: "Half" },
  { name: "MUAAZ", size: 34, no: 7, status: "Half" },
  { name: "AYAAN", size: 38, no: 11, status: "Half" },
  { name: "NUBY", size: 22, no: 22, status: "Half" },
  { name: "M. ALI", size: 42, no: 10, status: "Half" },
  { name: "ZIYAN", size: 40, no: 86, status: "Half" },
  { name: "ZEDD", size: 40, no: "01", status: "Half" },
  { name: "REHAN", size: 38, no: 12, status: "Full" },
  { name: "YASIN", size: 42, no: 16, status: "Full" },
  { name: "SAMAK", size: 40, no: 16, status: "Half" },
  { name: "TAMIM", size: 30, no: "08", status: "Half" },
  { name: "UBADA", size: 26, no: "07", status: "Half" },
  { name: "SAMREEN", size: 34, no: "07", status: "Half" },
  { name: "MOHAMMAD", size: 28, no: 15, status: "Half" },
  { name: "SHAYAN", size: 24, no: 10, status: "Half" },
  { name: "HASNAIN", size: 24, no: 22, status: "Half" },
  { name: "MOHAMMED", size: 24, no: "01", status: "Half" },
  { name: "ABDULLAH", size: 30, no: "07", status: "Half" },
  { name: "KHALID", size: 44, no: 19, status: "Half" },
  { name: "INAYA", size: 24, no: "05", status: "Half" },
  { name: "ISMAIL", size: 40, no: "01", status: "Full" },
  { name: "FAIZ", size: 40, no: 7, status: "Half" },
  { name: "SAQIB", size: 44, no: 42, status: "Half" },
  { name: "BARKAT ALI", size: 44, no: "09", status: "Half" },
  { name: "MAISHA", size: 26, no: 18, status: "Half" },
  { name: "ZISHAN", size: 44, no: 86, status: "Half" },
  { name: "SUBHAN", size: 44, no: 14, status: "Full" },
  { name: "IBRAHIM", size: 28, no: "01", status: "Half" },
  { name: "UMAR", size: 40, no: 22, status: "Half" },
  { name: "FAIZAN", size: 42, no: 10, status: "Half" },
  { name: "TAUFIQUE", size: 40, no: 3, status: "Half" },
  { name: "ADIL", size: 30, no: 24, status: "Half" },
  { name: "ZAYAN", size: 28, no: 14, status: "Half" },
  { name: "ARFAN", size: 26, no: "04", status: "Half" },
  { name: "AZIM", size: 42, no: 17, status: "Half" },
  { name: "AHMED", size: 46, no: 17, status: "Half" },
  { name: "AZAAN", size: 30, no: "05", status: "Half" },
  { name: "NUSAYB", size: 38, no: 30, status: "Full" },
  { name: "NUSAYB", size: 38, no: "30", status: "Full" },
  { name: "ASIM", size: 44, no: 18, status: "Half" },
  { name: "RUQAIYYA", size: 30, no: 15, status: "Half" },
  { name: "M. HASSAAN", size: 28, no: 10, status: "Half" },
  { name: "UMME HANI", size: 22, no: 7, status: "Half" },
  { name: "M. HUSAIN", size: 26, no: 1, status: "Half" },
  { name: "KHADIJA", size: 24, no: 2, status: "Half" },
  { name: "M. ALI. S.", size: 42, no: 46, status: "Full" },
  { name: "MOHAMMED", size: 24, no: 3, status: "Half" },
  { name: "IBRAHIM", size: 28, no: "08", status: "Half" },
  { name: "SUHEB. R.", size: 40, no: 13, status: "Full" },
  { name: "M. SAAD", size: 34, no: 33, status: "Half" },
  { name: "A. SAMAD", size: 44, no: 10, status: "Full" },
  { name: "TAHIR", size: 42, no: 11, status: "Full" },
  { name: "DAN", size: 44, no: 38, status: "Half" },
  { name: "ARFAT", size: 38, no: "04", status: "Half" },
  { name: "ARFA", size: 26, no: 25, status: "Full" },
  { name: "SANDEEP", size: 40, no: 01, status: "Full" },
  { name: "SHEEMASA", size: 38, no: 19, status: "Full" },
  { name: "ALISHA", size: 22, no: 16, status: "Half" },
  { name: "MIZAN", size: 26, no: 13, status: "Half" },
  { name: "NAUMAN", size: 38, no: 4, status: "Half" },
  { name: "MAZHAR", size: 40, no: 23, status: "Half" },
  { name: "MOHSIN", size: 42, no: "09", status: "Half" }
];

function populateTable() {
  const tableBody = document.getElementById("table-body");
  data.forEach((item, index) => {
    let row = `<tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.size}</td>
                    <td>${item.no}</td>
                    <td>${item.status}</td>
                </tr>`;
    tableBody.innerHTML += row;
  });
}

function searchTable() {
  let input = document.getElementById("search").value.toLowerCase();
  let rows = document.querySelectorAll("tbody tr");
  
  rows.forEach(row => {
    let name = row.cells[1].textContent.toLowerCase();
    let status = row.cells[4].textContent.toLowerCase();
    
    if (name.includes(input) || status.includes(input)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// Populate the table on page load
populateTable();
