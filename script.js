// قاعدة بيانات موظفي ديوان بلدية العربان
const employeesDatabase = [
    {
        nationalId: "202020123456",
        name: "عبدالباري سعدون فرحات",
        department: "قسم الشؤون الإدارية وتقنية المعلومات",
        title: "مطور أنظمة ومسؤول تقني",
        status: "على رأس العمل",
        deficiencies: [] // بدون نواقص (ملف مكتمل)
    },
    {
        nationalId: "201980987654",
        name: "محمود أحمد الهادي",
        department: "قسم الحسابات والميزانية",
        title: "محاسب مالي",
        status: "على رأس العمل",
        deficiencies: [
            "صورة شمسية حديثة ملونة (عدد 2)",
            "إفادة إدارية بعدم السوابق الجنائية"
        ]
    }
];

function searchEmployee() {
    const inputVal = document.getElementById('nationalIdInput').value.trim();
    const resultCard = document.getElementById('resultCard');
    const errorMsg = document.getElementById('errorMsg');
    
    resultCard.classList.remove('show');
    errorMsg.style.display = 'none';

    if (inputVal === "") {
        alert("الرجاء إدخال الرقم الوطني أولاً.");
        return;
    }

    const foundEmployee = employeesDatabase.find(emp => emp.nationalId === inputVal);

    if (foundEmployee) {
        document.getElementById('resName').innerText = foundEmployee.name;
        document.getElementById('resId').innerText = foundEmployee.nationalId;
        document.getElementById('resDept').innerText = foundEmployee.department;
        document.getElementById('resTitle').innerText = foundEmployee.title;
        document.getElementById('resStatus').innerText = foundEmployee.status;

        const deficiencyContainer = document.getElementById('deficiencyContainer');
        
        if (foundEmployee.deficiencies.length > 0) {
            let listHTML = foundEmployee.deficiencies.map(item => `<li>${item}</li>`).join('');
            deficiencyContainer.innerHTML = `
                <div class="deficiency-box">
                    <div class="deficiency-title">⚠️ النواقص المطلوبة في الملف الشخصي:</div>
                    <ul class="deficiency-list">${listHTML}</ul>
                </div>
            `;
        } else {
            deficiencyContainer.innerHTML = `
                <div class="no-deficiency">✅ ملفك الإداري مكتمل ولا توجد أي نواقص مطلوبة حالياً.</div>
            `;
        }

        resultCard.classList.add('show');
    } else {
        errorMsg.style.display = 'block';
    }
}
