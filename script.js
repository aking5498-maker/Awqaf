const servicesData = [
    {
        title: "مسجد الشهداء (الجامع الكبير)",
        docs: [
            "تقام فيه صلاة الجمعة والصلوات الخمس",
            "يحتوي على مقر لحفظ القرآن الكريم",
            "يوجد مصلى خاص بالنساء"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "المساجد الجامعة - وسط المدينة",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد النور",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "حلقات تحفيظ قرآن قصيرة بعد صلاة العصر"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "مساجد المحلات - حي الزهور",
        status: "available",
        statusText: "مفتوح للصلوات الخمس"
    },
    {
        title: "مسجد الإمام مالك",
        docs: [
            "تقام فيه صلاة الجمعة والصلوات الخمس",
            "يحتوي على دار لتحفيظ القرآن الكريم للناشئة"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "المساجد الجامعة - طريق المشتل",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد الهدى والتقوى",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "مغلق مؤقتاً لصيانة منظومة التكييف"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "مساجد المحلات - الحي التجاري",
        status: "closed",
        statusText: "مغلق مؤقتاً للصيانة"
    },
    {
        title: "مسجد أبي بكر الصديق",
        docs: [
            "تقام فيه صلاة الجمعة والصلوات الخمس",
            "يحتوي على مكتبة إسلامية صغيرة وملحق لدروس العلم"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "المساجد الجامعة - المخطط السكني",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد التوبة",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "يوجد به مقر لحلقات السبت والأحد لتحفيظ القرآن"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "مساجد المحلات - طريق السواني",
        status: "available",
        statusText: "مفتوح للصلوات الخمس"
    },
    {
        title: "مسجد الفتح الإسلامي",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "مساحة واسعة لمواقف السيارات ومجهزة بالكامل"
        ],
        fees: "مجاني / وقف إسلامي",
        category: "مساجد المحلات - منطقة السوق القديم",
        status: "available",
        statusText: "مفتوح للصلوات الخمس"
    },
    {
        title: "مكتب شؤون الأوقاف والمساجد بالبلدية",
        docs: [
            "المقر الإداري لتنسيق شؤون المساجد والمقار القرآنية",
            "استقبال طلبات الأئمة والخطباء والمشرفين",
            "أوقات العمل: من الأحد إلى الخميس (8:00 ص - 2:00 م)"
        ],
        fees: "بدون رسوم",
        category: "المقر الإداري - ديوان الأوقاف",
        status: "available",
        statusText: "القسم الإداري مفتوح"
    }
];

const servicesContainer = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');

function displayServices(list) {
    if (!servicesContainer) return;
    servicesContainer.innerHTML = "";
    if (list.length === 0) {
        servicesContainer.innerHTML = "<p style='text-align: center; color: #777;'>عذراً، لم نجد نتيجة تطابق بحثك.</p>";
        return;
    }
    
    list.forEach((service, index) => {
        let docsListHTML = service.docs.map(doc => `<li>${doc}</li>`).join('');

        let statusBadgeHTML = '';
        if (service.status) {
            const isAvailable = service.status === 'available';
            const statusBg = isAvailable ? '#d4edda' : '#f8d7da';
            const statusColor = isAvailable ? '#155724' : '#721c24';
            const dotColor = isAvailable ? '#28a745' : '#dc3545';
            
            statusBadgeHTML = `
                <div style="display: inline-flex; align-items: center; gap: 6px; background: ${statusBg}; color: ${statusColor}; padding: 5px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-bottom: 10px;">
                    <span style="width: 8px; height: 8px; background-color: ${dotColor}; border-radius: 50%; display: inline-block;"></span>
                    <span>${service.statusText}</span>
                </div>
            `;
        }

        let feesHTML = service.fees ? `<span class="badge">📌 التصنيف: ${service.fees}</span>` : '';

        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
            <div class="service-header" onclick="toggleDocs(${index})">
                <div class="service-title-area">
                    <h4>${service.title}</h4>
                    <p>الموقع/التصنيف: ${service.category}</p>
                </div>
                <span style="color: #1e73e8; font-size: 13px; font-weight: 600;">عرض التفاصيل 🔽</span>
            </div>
            
            <div class="service-badges" style="display: flex; flex-direction: column; align-items: flex-start;">
                ${statusBadgeHTML}
                ${feesHTML}
            </div>

            <div class="docs-container" id="docs-${index}">
                <strong style="font-size: 13px; color: #333; display: block; margin-bottom: 8px;">البيانات / التفاصيل:</strong>
                <ul>
                    ${docsListHTML}
                </ul>
            </div>
        `;
        servicesContainer.appendChild(card);
    });
}

window.toggleDocs = function(index) {
    const docsDiv = document.getElementById(`docs-${index}`);
    if (docsDiv) {
        docsDiv.classList.toggle('show');
    }
}

displayServices(servicesData);

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = servicesData.filter(service => 
            service.title.toLowerCase().includes(term) || 
            service.docs.some(doc => doc.toLowerCase().includes(term)) ||
            service.category.toLowerCase().includes(term) ||
            (service.statusText && service.statusText.toLowerCase().includes(term))
        );
        displayServices(filtered);
    });
}
