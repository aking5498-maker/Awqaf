const servicesData = [
    {
        title: "مسجد الشهداء (الجامع الكبير)",
        image: "https://images.unsplash.com/photo-1564769625405-efef043c74e1?auto=format&fit=crop&w=500&q=80",
        docs: [
            "تقام فيه صلاة الجمعة والصلوات الخمس",
            "يحتوي على مقر لحفظ القرآن الكريم",
            "يوجد مصلى خاص بالنساء"
        ],
        category: "المساجد الجامعة - وسط المدينة",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد النور",
        image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=500&q=80",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "حلقات تحفيظ قرآن قصيرة بعد صلاة العصر"
        ],
        category: "مساجد الأحياء - حي الزهور",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد الإمام مالك",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
        docs: [
            "تقام فيه صلاة الجمعة والصلوات الخمس",
            "يحتوي على دار لتحفيظ القرآن الكريم للناشئة"
        ],
        category: "المساجد الجامعة - طريق المشتل",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد الهدى والتقوى",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=500&q=80",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "مغلق مؤقتاً لصيانة منظومة التكييف"
        ],
        category: "مساجد الأحياء - الحي التجاري",
        status: "closed",
        statusText: "مغلق للصلوات الخمس (مغلق الجمعة)"
    },
    {
        title: "مسجد أبي بكر الصديق",
        image: "https://images.unsplash.com/photo-1564769625405-efef043c74e1?auto=format&fit=crop&w=500&q=80",
        docs: [
            "تقام فيه صلاة الجمعة والصلوات الخمس",
            "يحتوي على مكتبة إسلامية صغيرة وملحق لدروس العلم"
        ],
        category: "المساجد الجامعة - المخطط السكني",
        status: "available",
        statusText: "مفتوح للصلوات الخمس والجمعة"
    },
    {
        title: "مسجد التوبة",
        image: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&w=500&q=80",
        docs: [
            "تقام فيه الصلوات الخمس فقط",
            "يوجد به مقر لحلقات السبت والأحد لتحفيظ القرآن"
        ],
        category: "مساجد الأحياء - طريق السواني",
        status: "available",
        statusText: "مفتوح للصلوات الخمس"
    },
    {
        title: "مقر تحفيظ القرآن الكريم",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
        docs: [
            "مقر مستقل لتحفيظ القرآن وتخريج الحفاظ",
            "دورات مجانية طوال أيام الأسبوع"
        ],
        category: "مراكز تحفيظ - وسط المدينة",
        status: "available",
        statusText: "مركز تحفيظ فعال"
    },
    {
        title: "مكتب شؤون الأوقاف والمساجد",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80",
        docs: [
            "المقر الإداري لتنسيق شؤون المساجد والمقار القرآنية",
            "استقبال طلبات الأئمة والخطباء والمشرفين",
            "أوقات العمل: من الأحد إلى الخميس (8:00 ص - 2:00 م)"
        ],
        category: "المقر الإداري - ديوان الأوقاف",
        status: "available",
        statusText: "القسم الإداري مفتوح"
    }
];

const servicesContainer = document.getElementById('servicesContainer');
const searchInput = document.getElementById('searchInput');
const resultsCount = document.getElementById('resultsCount');

function displayServices(list) {
    if (!servicesContainer) return;
    servicesContainer.innerHTML = "";
    
    if (resultsCount) {
        resultsCount.innerText = `نتائج البحث: ${list.length} مسجد ومقر`;
    }

    if (list.length === 0) {
        servicesContainer.innerHTML = "<p style='grid-column: 1/-1; text-align: center; color: #777; padding: 30px;'>عذراً، لم نجد نتيجة تطابق بحثك.</p>";
        return;
    }
    
    list.forEach((service, index) => {
        let docsListHTML = service.docs.map(doc => `<li>${doc}</li>`).join('');

        const isAvailable = service.status === 'available';
        const statusClass = isAvailable ? 'status-open' : 'status-closed';

        const card = document.createElement('div');
        card.classList.add('service-card');
        card.innerHTML = `
            <img src="${service.image}" alt="${service.title}" class="card-img">
            <div class="card-body">
                <div class="card-title">${service.title}</div>
                <div class="card-category">📍 ${service.category}</div>
                <div class="card-status">
                    <span class="status-tag ${statusClass}">${service.statusText}</span>
                </div>
                
                <button class="details-btn" onclick="toggleDocs(${index})">عرض التفاصيل 🔽</button>

                <div class="docs-container" id="docs-${index}">
                    <ul style="margin-top: 5px;">
                        ${docsListHTML}
                    </ul>
                </div>
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
            service.statusText.toLowerCase().includes(term)
        );
        displayServices(filtered);
    });
}
