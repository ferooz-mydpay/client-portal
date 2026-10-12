function app(){
  // أيقونات القائمة الجانبية (SVG مضمّنة)
  var ic=function(p){return '<svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};
  var I={grid:ic('<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>'),
    building:ic('<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/>'),
    user:ic('<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>'),
    users:ic('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    file:ic('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/><path d="M9 13h6M9 17h4"/>'),
    ticket:ic('<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>'),
    alert:ic('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4M12 17h.01"/>'),
    money:ic('<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>'),
    shield:ic('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'),
    bed:ic('<path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/>'),
    deal:ic('<path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><rect width="20" height="5" x="2" y="7" rx="1"/><path d="M12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>'),heart:ic('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>')};
  var docIc=function(p){return '<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>';};

  return {
    /* ---------- حالة التنقّل ---------- */
    screen:'landing', role:'client', page:'dashboard', signupStep:1, drawer:false,
    showInbox:false, showSimLog:false,
    cd:{d:'--',h:'--',m:'--',s:'--'},
    invFilter:'all', ticketFilter:'all', creditFilter:'pending', creditNote:'',
    simLog:[], inbox:[], clientQuotes:[],
    /* نماذج المبيعات: تُربط بحقول الإدخال عبر x-model */
    quoteForm:{valid:'',discountPct:0,lines:[{"nat":"الهند","job":"عامل مستودعات","qty":10,"duration":"24 شهر","salary":700,"housing":500,"food":300,"transport":500,"clientHousing":false,"clientFood":false,"clientTransport":false,"unit":3000,"total":720000}]}, contractForm:{no:'',date:''}, annexForm:{type:'زيادة عمالة',detail:''},
    actionNote:'',
    visitForm:{client:'',contact:'',phone:'',address:'',lat:null,lng:null,note:'',mapsUrl:''},
    transferForm:{kind:'site',target:'',note:''},
    visitMonthFilter:'2026-08',
    workSites:['موقع العليا · الرياض','معرض الرياض · فعالية','مطبخ الفعاليات','موقع جدة · الروضة','موقع الدمام · الصناعية'],
    housingOptions:['مبنى A · غرفة 12','مبنى A · غرفة 9','مبنى B · غرفة 5','مبنى B · غرفة 7','مجمع النور · جناح 3'],
    _q:0, _sim:0,
    /* نماذج العميل — حقول مطابقة لكيانات CRM */
    ticketForm:{type:'',title:'',contract:'',workerId:'',site:'',priority:'متوسطة',description:'',phone:''},
    laborForm:{contract:'',job:'',qty:null,nationality:'بدون تفضيل',startDate:'',duration:'حتى نهاية العقد',site:'',notes:''},
    ticketTypeOptions:[
      {id:'replacement',label:'استبدال عامل',title:'طلب استبدال عامل',hint:'ضعف أداء / غياب / عدم ملاءمة'},
      {id:'complaint',label:'بلاغ أو شكوى',title:'بلاغ ضد عامل',hint:'سلوك أو مخالفة أو تأخير'},
      {id:'attendance',label:'مشكلة حضور',title:'بلاغ تأخر أو غياب',hint:'غياب عن الموقع أو تأخر متكرر'},
      {id:'inquiry',label:'استفسار تشغيلي',title:'استفسار تشغيلي',hint:'عقد، موقع، جدول، أو خدمة'}
    ],

    /* ---------- حالة النافذة والإشعارات ---------- */
    modal:{open:false, kind:null, title:'', data:null},
    toasts:[], _tid:0,

    /* ---------- خرائط الحالات (شارات) ---------- */
    statusMap:{active:{t:'نشط',c:'text-emerald-700 bg-emerald-50'},expired:{t:'منتهي',c:'text-rose-700 bg-rose-50'},pending:{t:'معلّق',c:'text-amber-700 bg-amber-50'},leave:{t:'إجازة',c:'text-violet-700 bg-violet-50'}},
    ticketMap:{open:{t:'قيد المراجعة',c:'text-amber-700 bg-amber-50',bar:'bg-amber-500'},inprogress:{t:'قيد المعالجة',c:'text-brand-700 bg-brand-50',bar:'bg-brand-500'},resolved:{t:'تم الحل',c:'text-emerald-700 bg-emerald-50',bar:'bg-emerald-500'}},
    invMap:{paid:{t:'مدفوعة',c:'text-emerald-700 bg-emerald-50'},due:{t:'مستحقة',c:'text-amber-700 bg-amber-50'},overdue:{t:'متأخرة',c:'text-rose-700 bg-rose-50'},draft:{t:'مسودّة',c:'text-slate-600 bg-slate-100'}},
    salMap:{pending:{t:'بانتظار التدقيق',c:'text-amber-700 bg-amber-50'},approved:{t:'معتمد',c:'text-emerald-700 bg-emerald-50'},rejected:{t:'مرفوض',c:'text-rose-700 bg-rose-50'}},
    clientMap:{active:{t:'نشط',c:'text-emerald-700 bg-emerald-50'},verify:{t:'قيد التحقق',c:'text-amber-700 bg-amber-50'},suspended:{t:'معلّق',c:'text-rose-700 bg-rose-50'}},
    /* ملف العميل الحالي (Account) — يُستبدل لاحقاً بجلب من CRM / Power Apps */
    account:{id:'CL-1001',name:'شركة آفاق المستقبل للتجارة',cr:'1010XXXXXX',vat:'3001XXXXXXXXX03',sector:'قطاع الأعمال',since:'2023',status:'active',city:'الرياض',amName:'أ. أحمد عمر',amPhone:'+966500000000',amEmail:'ahmad.omar@jussuremdad.com'},

    /* ---------- الهيكل التنظيمي: أقسام → وحدات → مناصب (صلاحيات المنصب فقط) ---------- */
    pickDept:'client', pickUnit:'recruit',
    actionForm:{decision:'reply',notes:'',deadlineHours:'24',nextRole:'',escalateTo:''},
    workStatusMap:{
      pending:{t:'معلّق',c:'text-amber-700 bg-amber-50'},
      replied:{t:'تم الرد',c:'text-brand-700 bg-brand-50'},
      approved:{t:'موافقة',c:'text-emerald-700 bg-emerald-50'},
      rejected:{t:'مرفوض',c:'text-rose-700 bg-rose-50'},
      onhold:{t:'معلّق للمتابعة',c:'text-violet-700 bg-violet-50'},
      escalated:{t:'تم التصعيد',c:'text-rose-800 bg-rose-100'}
    },
    workItems:[
      {id:1,ref:'WF-9001',title:'مراجعة عرض سعر — شركة الواحة',fromRole:'sales_rep',toRole:'sales_sup',status:'pending',deadline:'خلال 24 ساعة',decision:null,notes:'',escalatedTo:null,dept:'sales'},
      {id:2,ref:'WF-9002',title:'اعتماد كشف رواتب يوليو',fromRole:'fin_acc',toRole:'fin_sup',status:'pending',deadline:'خلال 8 ساعات',decision:null,notes:'',escalatedTo:null,dept:'finance'},
      {id:3,ref:'WF-9003',title:'مراجعة بنود عقد JE-2026-311',fromRole:'sales_mgr',toRole:'leg_officer',status:'pending',deadline:'خلال 48 ساعة',decision:null,notes:'',escalatedTo:null,dept:'legal'},
      {id:4,ref:'WF-9004',title:'تسكين عمالة عقد جديد',fromRole:'as_am',toRole:'hou_coord',status:'pending',deadline:'خلال 24 ساعة',decision:null,notes:'',escalatedTo:null,dept:'housing'},
      {id:5,ref:'REQ-8804',title:'طلب استبدال عامل — أولوية',fromRole:'client',toRole:'as_am',status:'pending',deadline:'خلال 4 ساعات',decision:null,notes:'',escalatedTo:null,dept:'aftersales'}
    ],
    org:[
      {id:'sales',order:1,label:'قسم المبيعات',home:'salesSpec',positions:[
        {id:'sales_rep',name:'فهد العتيبي',label:'أخصائي مبيعات',level:1,reportsTo:'sales_sup',home:'salesSpec',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'salesSpec',label:'ميدان وزيارات',icon:I.deal}],perms:['تسجيل زيارات ميدانية','رفع مسودّة عرض سعر','متابعة مسار العميل','بدء تجديد العقود'],denied:['اعتماد التسعير','اعتماد الخصم','التسليم النهائي للتشغيل','تعديل قائمة الأسعار']},
        {id:'sales_sup',name:'نورة الشمري',label:'مشرف مبيعات',level:2,reportsTo:'sales_mgr',home:'salesSup',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'salesSup',label:'مراجعة واعتماد',icon:I.shield}],perms:['مراجعة عروض الأخصائيين','اعتماد التسعير ضمن السقف (≤10٪)','إعادة توجيه الصفقة','طلب تعديل من الأخصائي'],denied:['اعتماد خصم خارج السياسة','التسليم النهائي للتشغيل','تسجيل زيارات ميدانية']},
        {id:'sales_mgr',name:'عبدالله القحطاني',label:'مدير مبيعات',level:3,reportsTo:null,home:'salesMgr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'salesMgr',label:'قيادة المبيعات',icon:I.deal},{id:'admin',label:'عمولات ومستهدف',icon:I.grid}],perms:['اعتماد العروض النهائية','اعتماد خصم خارج السقف','التسليم للتشغيل','متابعة المستهدف والعمولة','تقارير الفريق'],denied:['اعتماد الائتمان','صرف الرواتب','تسجيل زيارات ميدانية']}
      ]},
      {id:'aftersales',order:2,label:'قسم خدمات ما بعد البيع',home:'am',positions:[
        {id:'as_agent',name:'ريم الحربي',label:'أخصائي خدمة عملاء',level:1,reportsTo:'as_sup',home:'desk',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'followup',label:'متابعة SLA',icon:I.alert}],perms:['استقبال التذاكر','تسجيل الردود','تصعيد ضمن القسم'],denied:['إغلاق تذكرة عالية دون موافقة']},
        {id:'as_am',name:'أحمد عمر',label:'مدير حساب',level:2,reportsTo:'as_sup',home:'am',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'am',label:'لوحة المتابعة',icon:I.user}],perms:['معالجة طلبات العملاء','نقل مراحل العمل','التنسيق مع التشغيل'],denied:['اعتماد الرواتب']},
        {id:'as_sup',name:'سارة ناصر',label:'مشرف خدمات ما بعد البيع',level:3,reportsTo:'as_mgr',home:'followup',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'followup',label:'مركز التصعيد',icon:I.alert},{id:'am',label:'متابعة الحسابات',icon:I.user}],perms:['رصد SLA','إعادة التعيين','اعتماد إغلاق التصعيد'],denied:['تعديل العقود']},
        {id:'as_mgr',name:'خالد الدوسري',label:'مدير خدمات ما بعد البيع',level:4,reportsTo:null,home:'am',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'am',label:'لوحة المتابعة',icon:I.user},{id:'followup',label:'التصعيد',icon:I.alert}],perms:['سياسات الخدمة','التدخّل النهائي','تقارير رضا العملاء'],denied:['صرف الرواتب']}
      ]},
      {id:'finance',order:3,label:'قسم المالية',home:'finance',positions:[
        {id:'fin_acc',name:'منى الزهراني',label:'محاسب رواتب',level:1,reportsTo:'fin_sup',home:'finance',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'finance',label:'تدقيق الرواتب',icon:I.money}],perms:['تدقيق البنود','تعديل الخصومات','رفع الكشف للمشرف'],denied:['اعتماد الكشف النهائي']},
        {id:'fin_credit',name:'ياسر الغامدي',label:'موظف ائتمان',level:1,reportsTo:'fin_mgr',home:'credit',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'credit',label:'تدقيق مرفقات العملاء',icon:I.shield}],perms:['مراجعة مرفقات كل طلب على حدة','التحقق من شهادة الضريبة والسجل ورخصة البلدية','التحقق من العنوان الوطني وهوية المفوض وبياناته','مراجعة خطاب التفويض وتقرير سمة وبيان','تعليق الطلب لاستكمال المتطلبات','الموافقة أو الرفض بعد التدقيق وترحيلها للمدير المالي'],denied:['الاعتماد النهائي للحساب','صرف الرواتب','تسعير المبيعات']},
        {id:'fin_sup',name:'هند السبيعي',label:'مشرف مالي',level:2,reportsTo:'fin_mgr',home:'finance',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'finance',label:'تدقيق الرواتب',icon:I.money},{id:'credit',label:'الائتمان',icon:I.shield}],perms:['مراجعة التدقيق','اعتماد الائتمان ضمن السقف','إحالة الصرف'],denied:['تعديل العقود']},
        {id:'fin_mgr',name:'سلطان الراشد',label:'مدير المالية',level:3,reportsTo:null,home:'finance',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'finance',label:'الرواتب والاعتمادات',icon:I.money},{id:'credit',label:'اعتماد ائتماني نهائي',icon:I.shield}],perms:['الاعتماد النهائي لملفات الائتمان','تفعيل أو تعليق حساب العميل','اعتماد الكشف النهائي','سقوف الائتمان','التقارير المالية'],denied:['إدارة السكن']}
      ]},
      {id:'legal',order:4,label:'القانونية',home:'legal',positions:[
        {id:'leg_officer',name:'لينا العتيبي',label:'باحث قانوني',level:1,reportsTo:'leg_sup',home:'legal',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'legal',label:'مراجعة العقود',icon:I.file}],perms:['مراجعة المسودات','تسجيل الملاحظات القانونية'],denied:['اعتماد نهائي للعقد']},
        {id:'leg_sup',name:'ماجد الشمري',label:'مشرف قانوني',level:2,reportsTo:'leg_mgr',home:'legal',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'legal',label:'مراجعة العقود',icon:I.file}],perms:['اعتماد الملاحق الروتينية','تصعيد المخاطر'],denied:['توقيع عقود استراتيجية']},
        {id:'leg_mgr',name:'د. وليد العنزي',label:'مدير الشؤون القانونية',level:3,reportsTo:null,home:'legal',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'legal',label:'مراجعة العقود',icon:I.file}],perms:['الاعتماد القانوني النهائي','إدارة النزاعات'],denied:['صرف الرواتب']}
      ]},
      {id:'housing',order:5,label:'إدارة الإسكان',home:'housing',positions:[
        {id:'hou_coord',name:'بندر المطيري',label:'منسق سكن',level:1,reportsTo:'hou_sup',home:'housing',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'housing',label:'إدارة المجمعات',icon:I.bed}],perms:['تخصيص الأسرّة','تحديث الإشغال'],denied:['نقل جماعي بين المجمعات']},
        {id:'hou_sup',name:'أمل القحطاني',label:'مشرف مجمع',level:2,reportsTo:'hou_mgr',home:'housing',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'housing',label:'إدارة المجمعات',icon:I.bed}],perms:['اعتماد النقل','متابعة الصيانة'],denied:['عقود الإسكان الخارجية']},
        {id:'hou_mgr',name:'تركي الحربي',label:'مدير الإسكان',level:3,reportsTo:null,home:'housing',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'housing',label:'إدارة المجمعات',icon:I.bed}],perms:['سياسات الإسكان','الطاقة الاستيعابية'],denied:['اعتماد الرواتب']}
      ]},
      {id:'hr',order:6,label:'إدارة الموارد البشرية للعمال',home:'hr',units:[
        {id:'recruit',label:'التوظيف الخارجي',hint:'استقدام وتوظيف من الخارج',positions:[
          {id:'hr_recruit_coord',name:'مشعل الدوسري',label:'منسق استقدام',level:1,reportsTo:'hr_recruit_sup',home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'التوظيف الخارجي',icon:I.users}],perms:['متابعة طلبات الاستقدام','تحديث حالة المرشح'],denied:['اعتماد عقود الاستقدام']},
          {id:'hr_recruit_sup',name:'دانة العتيبي',label:'مشرف استقدام',level:2,reportsTo:'hr_recruit_mgr',home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'التوظيف الخارجي',icon:I.users}],perms:['اعتماد الدفعات','التنسيق مع المكاتب'],denied:['سياسات الاستقدام']},
          {id:'hr_recruit_mgr',name:'فيصل الشمري',label:'مدير التوظيف الخارجي',level:3,reportsTo:null,home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'التوظيف الخارجي',icon:I.users}],perms:['اعتماد خطط الاستقدام','اتفاقيات المكاتب'],denied:['صرف الرواتب']}
        ]},
        {id:'labor',label:'HR العمالة',hint:'ملفات العمالة والعقود التشغيلية',positions:[
          {id:'hr_labor_spec',name:'جواهر الزهراني',label:'أخصائي موارد بشرية',level:1,reportsTo:'hr_labor_sup',home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'HR العمالة',icon:I.user}],perms:['تحديث ملفات العمال','طلبات الإجازات'],denied:['إنهاء خدمة جماعي']},
          {id:'hr_labor_sup',name:'عمر السهلي',label:'مشرف HR عمالة',level:2,reportsTo:'hr_labor_mgr',home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'HR العمالة',icon:I.user}],perms:['اعتماد الإجازات','تصعيد المخالفات'],denied:['سياسات الموارد']},
          {id:'hr_labor_mgr',name:'نوال القحطاني',label:'مدير HR العمالة',level:3,reportsTo:null,home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'HR العمالة',icon:I.user}],perms:['سياسات العمالة','اعتماد إنهاء الخدمة'],denied:['الائتمان']}
        ]},
        {id:'gr',label:'العلاقات الحكومية GR',hint:'تأشيرات، إقامات، جهات حكومية',positions:[
          {id:'hr_gr_spec',name:'سامي الغامدي',label:'أخصائي علاقات حكومية',level:1,reportsTo:'hr_gr_sup',home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'GR',icon:I.shield}],perms:['متابعة المعاملات الحكومية','تحديث الحالات'],denied:['تمثيل الشركة رسمياً']},
          {id:'hr_gr_sup',name:'لمى الحربي',label:'مشرف GR',level:2,reportsTo:'hr_gr_mgr',home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'GR',icon:I.shield}],perms:['أولوية المعاملات','التصعيد للجهات'],denied:['سياسات التأشيرات']},
          {id:'hr_gr_mgr',name:'راكان العتيبي',label:'مدير GR',level:3,reportsTo:null,home:'hr',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'hr',label:'GR',icon:I.shield}],perms:['الاعتماد النهائي للمعاملات','العلاقات المؤسسية'],denied:['الرواتب']}
        ]}
      ]},
      {id:'procurement',order:7,label:'إدارة المشتريات',home:'procurement',positions:[
        {id:'proc_buyer',name:'طلال العنزي',label:'مشتري',level:1,reportsTo:'proc_sup',home:'procurement',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'procurement',label:'طلبات الشراء',icon:I.deal}],perms:['إنشاء طلب شراء','جمع عروض الموردين'],denied:['اعتماد أوامر الشراء']},
        {id:'proc_sup',name:'غادة الراشد',label:'مشرف مشتريات',level:2,reportsTo:'proc_mgr',home:'procurement',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'procurement',label:'طلبات الشراء',icon:I.deal}],perms:['مقارنة العروض','اعتماد ضمن السقف'],denied:['عقود إطار استراتيجية']},
        {id:'proc_mgr',name:'ناصر الزهراني',label:'مدير المشتريات',level:3,reportsTo:null,home:'procurement',nav:[{id:'desk',label:'صندوق العمل',icon:I.ticket},{id:'procurement',label:'طلبات الشراء',icon:I.deal}],perms:['اعتماد أوامر الشراء','عقود الموردين'],denied:['صرف الرواتب']}
      ]}
    ],
    roleMeta:{
      client:{label:'مساحة العميل',home:'dashboard',dept:'client',unit:null,level:0,reportsTo:null,short:'العميل',name:'م. خالد الغامدي',
        nav:[{id:'dashboard',label:'لوحة التحكم',icon:I.grid},{id:'workers',label:'العمالة',icon:I.users},{id:'contracts',label:'العقود',icon:I.file},{id:'invoices',label:'الفواتير',icon:I.money},{id:'tickets',label:'التذاكر',icon:I.ticket},{id:'profile',label:'بيانات الشركة',icon:I.building}],
        perms:['عرض العقود والفواتير','رفع شيت الحضور','فتح تذكرة دعم','طلب عمالة إضافية'],denied:['اعتماد داخلي','تصعيد داخلي للأقسام']}
    },

    /* ---------- خرائط حالات المبيعات ---------- */
    leadMap:{
      neu:{t:'مُسجَّل حديثاً',c:'text-slate-600 bg-slate-100'},
      visited:{t:'تمت الزيارة',c:'text-sky-700 bg-sky-50'},
      ready:{t:'جاهز للتسعير',c:'text-brand-700 bg-brand-50'},
      nego:{t:'مرحلة التفاوض',c:'text-violet-700 bg-violet-50'},
      quoted:{t:'تم تقديم العرض',c:'text-amber-700 bg-amber-50'},
      signed:{t:'تم توقيع العقد',c:'text-emerald-700 bg-emerald-50'},
      finance:{t:'اعتماد المالية وتفعيل العميل',c:'text-indigo-700 bg-indigo-50'},
      am:{t:'تحويل لمدير حساب',c:'text-teal-700 bg-teal-50'},
      housing:{t:'تسليم العمالة من السكن',c:'text-orange-700 bg-orange-50'},
      handed:{t:'عميل مفعّل — اكتملت المراحل',c:'text-emerald-700 bg-emerald-50'}
    },
    pipelineSteps:[
      {id:'visited',t:'تمت الزيارة'},
      {id:'nego',t:'التفاوض'},
      {id:'quoted',t:'تقديم العرض'},
      {id:'signed',t:'توقيع العقد'},
      {id:'finance',t:'اعتماد المالية'},
      {id:'am',t:'مدير الحساب'},
      {id:'housing',t:'تسليم السكن'},
      {id:'handed',t:'تفعيل نهائي'}
    ],
    creditMap:{
      pending:{t:'بانتظار تعميد الائتمان',c:'text-amber-700 bg-amber-50'},
      approved:{t:'مُعتمد ائتمانياً',c:'text-emerald-700 bg-emerald-50'},
      rejected:{t:'مرفوض ائتمانياً',c:'text-rose-700 bg-rose-50'}
    },

    /* ---------- بيانات المبيعات (تجريبية) ---------- */
    /* كل عميل يمثّل صفقة تمرّ بسير العمل: تسجيل ← تعميد ائتماني ← عرض سعر ← تفاوض ← توقيع ← تسليم */
    salesLeads:[
      {id:1,client:'شركة الواحة للضيافة',cr:'1010445566',ref:'LD-2026-041',sector:'ضيافة وفعاليات',need:'٤٠ عامل ضيافة · ٦ أشهر',credit:'approved',stage:'ready',value:960000,date:'2026/07/16',quote:null,contract:null,annexes:[],notified:true},
      {id:2,client:'مجموعة نماء التجارية',cr:'1010778899',ref:'LD-2026-040',sector:'تجزئة',need:'٢٥ عامل مستودعات',credit:'approved',stage:'quoted',value:1800000,date:'2026/07/14',quote:{no:'QT-2026-018',amount:1800000,valid:'2026/08/13',discountPct:5,lines:[{"nat":"الهند","job":"عامل مستودعات","qty":25,"duration":"24 شهر","salary":700,"housing":500,"food":300,"transport":500,"clientHousing":false,"clientFood":false,"clientTransport":false,"unit":3000,"total":1800000}]},quoteReview:'pending_sup',contract:null,annexes:[],notified:true},
      {id:3,client:'مصانع الرياض للأغذية',cr:'1010223344',ref:'LD-2026-038',sector:'تصنيع غذائي',need:'٦٠ عامل إنتاج',credit:'approved',stage:'quoted',value:4608000,date:'2026/07/09',quote:{no:'QT-2026-016',amount:4608000,valid:'2026/08/08',discountPct:15,lines:[{"nat":"بنغلاديش","job":"عامل إنتاج","qty":40,"duration":"24 شهر","salary":700,"housing":500,"food":300,"transport":500,"clientHousing":false,"clientFood":false,"clientTransport":false,"unit":3000,"total":2880000},{"nat":"الهند","job":"مشرف إنتاج","qty":20,"duration":"24 شهر","salary":1200,"housing":600,"food":300,"transport":500,"clientHousing":false,"clientFood":false,"clientTransport":false,"unit":3600,"total":1728000}]},quoteReview:'pending_mgr',contract:null,annexes:[],notified:true},
      {id:4,client:'شركة درب الشمال للمقاولات',cr:'1010990011',ref:'LD-2026-036',sector:'مقاولات',need:'٨٠ عامل إنشاءات',credit:'approved',stage:'signed',value:2100000,date:'2026/07/02',quote:{no:'QT-2026-012',amount:2100000,valid:'2026/08/01'},contract:{no:'JE-2026-311',signed:'2026/07/12'},annexes:[],notified:true},
      {id:5,client:'فنادق البحر الأحمر',cr:'1010556677',ref:'LD-2026-042',sector:'فندقة',need:'٣٠ عامل تشغيل فندقي',credit:'pending',stage:'neu',value:0,date:'2026/07/18',quote:null,contract:null,annexes:[],notified:false},
      {id:6,client:'مؤسسة ركن الخليج',cr:'1010334455',ref:'LD-2026-043',sector:'خدمات مساندة',need:'١٥ عامل نظافة',credit:'pending',stage:'neu',value:0,date:'2026/07/18',quote:null,contract:null,annexes:[],notified:false}
    ],
    /* عقود مقاربة على الانتهاء — فرصة تجديد يتابعها موظف المبيعات */
    salesRenewals:[
      {id:1,client:'شركة الأفق للتشغيل',no:'JE-2025-207',ends:'2026/09/01',daysLeft:44,workers:35,value:840000,status:'pending',notes:''},
      {id:2,client:'مجمع النخيل الطبي',no:'JE-2025-188',ends:'2026/08/20',daysLeft:32,workers:22,value:528000,status:'will_renew',notes:'العميل يطلب عرض تجديد مبكر'},
      {id:3,client:'شركة صروح الإنشاء',no:'JE-2025-166',ends:'2026/08/05',daysLeft:17,workers:50,value:1200000,status:'pending',notes:''}
    ],
    renewMap:{
      pending:{t:'بانتظار القرار',c:'text-amber-700 bg-amber-50'},
      will_renew:{t:'سيتم التجديد',c:'text-sky-700 bg-sky-50'},
      renewed:{t:'تم التجديد',c:'text-emerald-700 bg-emerald-50'},
      declined:{t:'لا يرغب بالتجديد',c:'text-rose-700 bg-rose-50'}
    },
    /* قائمة الأسعار المرجعية حسب المهنة — يستند إليها موظف المبيعات عند التسعير */
    priceList:[
      {job:'عامل نظافة',nat:'بنغلاديش / نيبال',monthly:1800,min:10},
      {job:'عامل مستودعات',nat:'الهند / بنغلاديش',monthly:2100,min:10},
      {job:'عامل ضيافة',nat:'الفلبين',monthly:2600,min:5},
      {job:'فنّي صيانة',nat:'الهند',monthly:3200,min:3},
      {job:'طاهٍ',nat:'الفلبين / نيبال',monthly:3500,min:2},
      {job:'مشرف موقع',nat:'مصر / الأردن',monthly:4200,min:1}
    ],
    /* سجل الزيارات والمتابعات الميدانية */
    salesVisits:[
      {id:1,client:'مصانع الرياض للأغذية',type:'زيارة ميدانية',date:'2026/08/05',month:'2026-08',note:'عرض تفصيلي لآلية التشغيل والسكن.',lat:24.7136,lng:46.6753,mapsUrl:'https://www.google.com/maps?q=24.7136,46.6753',done:true},
      {id:2,client:'مجموعة نماء التجارية',type:'زيارة ميدانية',date:'2026/08/07',month:'2026-08',note:'مناقشة العرض في موقع العميل.',lat:24.6877,lng:46.6858,mapsUrl:'https://www.google.com/maps?q=24.6877,46.6858',done:true},
      {id:3,client:'شركة الواحة للضيافة',type:'زيارة ميدانية',date:'2026/08/09',month:'2026-08',note:'زيارة تأكيد الاحتياجات.',lat:24.7743,lng:46.7386,mapsUrl:'https://www.google.com/maps?q=24.7743,46.7386',done:true},
      {id:4,client:'شركة الأفق للتشغيل',type:'زيارة ميدانية',date:'2026/07/20',month:'2026-07',note:'زيارة تجديد عقد.',lat:24.71,lng:46.67,mapsUrl:'https://www.google.com/maps?q=24.71,46.67',done:true}
    ],
    /* المستهدف البيعي الشهري (ريال) */
    salesTarget:5000000,

    /* ---------- البيانات (تجريبية) ---------- */
    workers:[
      {id:1,name:'محمد رحمن',job:'عامل نظافة',nat:'بنغلاديش',contract:'JE-2024-118',status:'active',location:'موقع العليا · الرياض',room:'مبنى A · غرفة 12',iqama:'1447/03/11هـ'},
      {id:2,name:'راجيش كومار',job:'فنّي صيانة',nat:'الهند',contract:'JE-2024-118',status:'active',location:'موقع العليا · الرياض',room:'مبنى A · غرفة 12',iqama:'1447/01/20هـ'},
      {id:3,name:'خوان دي لاكروز',job:'مضيف',nat:'الفلبين',contract:'JE-2024-203',status:'leave',location:'معرض الرياض · فعالية',room:'مبنى B · غرفة 5',iqama:'1447/06/02هـ'},
      {id:4,name:'عبدالله حسن',job:'مشرف',nat:'مصر',contract:'JE-2024-118',status:'pending',location:'بانتظار التوزيع',room:'غير مخصّص',iqama:'1446/12/15هـ'},
      {id:5,name:'سانتوش ثابا',job:'طاهٍ',nat:'نيبال',contract:'JE-2024-203',status:'active',location:'مطبخ الفعاليات',room:'مبنى B · غرفة 7',iqama:'1447/04/09هـ'},
      {id:6,name:'أنور علي',job:'عامل نظافة',nat:'بنغلاديش',contract:'JE-2024-118',status:'expired',location:'موقع العليا · الرياض',room:'مبنى A · غرفة 9',iqama:'1446/11/01هـ'}
    ],
    contracts:[
      {id:'JE-2024-118',title:'عقد التشغيل والنظافة',count:45,occ:92,elapsed:65,remain:'23 يوماً'},
      {id:'JE-2024-203',title:'عقد الضيافة والفعاليات',count:30,occ:78,elapsed:40,remain:'108 أيام'}
    ],
    tickets:[
      {id:'TKT-3820',title:'طلب استبدال عامل',type:'replacement',typeLabel:'استبدال',contract:'JE-2024-118',status:'open',step:2,pct:50,priority:'عالية',opened:'2026/07/15',crmCase:'CAS-88201'},
      {id:'TKT-3814',title:'بلاغ تأخر حضور',type:'attendance',typeLabel:'حضور',contract:'JE-2024-203',status:'inprogress',step:3,pct:75,priority:'متوسطة',opened:'2026/07/12',crmCase:'CAS-88174'},
      {id:'TKT-3790',title:'طلب زيادة عمالة',type:'inquiry',typeLabel:'استفسار',contract:'JE-2024-118',status:'resolved',step:4,pct:100,priority:'عادية',opened:'2026/07/01',crmCase:'CAS-88090'}
    ],
    /* فواتير العميل (Invoice) — مربوطة بعقد Account في CRM */
    invoices:[
      {id:'INV-2026-091',contract:'JE-2024-118',period:'يوليو 2026',amount:125000,due:'2026/08/05',status:'due',paid:0},
      {id:'INV-2026-078',contract:'JE-2024-203',period:'يونيو 2026',amount:98000,due:'2026/07/05',status:'paid',paid:98000},
      {id:'INV-2026-061',contract:'JE-2024-118',period:'مايو 2026',amount:125000,due:'2026/06/05',status:'paid',paid:125000},
      {id:'INV-2026-044',contract:'JE-2024-203',period:'أبريل 2026',amount:98000,due:'2026/05/05',status:'paid',paid:98000},
      {id:'INV-2026-029',contract:'JE-2024-118',period:'مارس 2026',amount:88000,due:'2026/04/05',status:'overdue',paid:0}
    ],
    docs:[
      {id:1,title:'السجل التجاري',meta:'وزارة التجارة',badge:'ساري',icon:docIc('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v5h5"/>'),rows:{'رقم السجل':'1010XXXXXX','الاسم التجاري':'شركة آفاق المستقبل','نوع الكيان':'ذات مسؤولية محدودة','تاريخ الإصدار':'1445/03/12هـ','تاريخ الانتهاء':'1447/03/11هـ'}},
      {id:2,title:'شهادة القيمة المضافة',meta:'هيئة الزكاة والضريبة',badge:'مسجّلة',icon:docIc('<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>'),rows:{'الرقم الضريبي':'3001XXXXXXXXX03','حالة التسجيل':'فعّال','الإقرارات':'منتظمة'}},
      {id:3,title:'العنوان الوطني',meta:'الموقع ومقر المنشأة',badge:'موثّق',icon:docIc('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),rows:{'المدينة':'الرياض','الحي':'العليا','الرمز البريدي':'12213','الرقم الإضافي':'8442'}},
      {id:4,title:'المفوّض بالتوقيع',meta:'صاحب صلاحية العقود',badge:'معتمد',icon:docIc('<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>'),rows:{'الاسم':'م. خالد الغامدي','المنصب':'المدير العام','رقم الهوية':'10XXXXXXXX','الصلاحية':'توقيع مطلق'}},
      {id:5,title:'بيانات المنشأة (قوى)',meta:'التصنيف ونطاقات',badge:'نطاق أخضر',icon:docIc('<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/>'),rows:{'رقم المنشأة':'7-XXXXXXX','الحجم':'متوسطة','نطاقات':'أخضر متوسط','مدد':'ملتزم'}},
      {id:6,title:'الحساب البنكي',meta:'بيانات التحويل',badge:'مؤكّد',icon:docIc('<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>'),rows:{'البنك':'الأهلي السعودي','الآيبان':'SA.. XXXX XXXX','التحقق':'مؤكّد'}}
    ],
    amClients:[
      {id:1,client:'شركة آفاق المستقبل',ref:'REQ-8801',task:'طلب توريد 10 عمال نظافة',status:'pending',priority:'عادية'},
      {id:2,client:'مجموعة الإتقان',ref:'REQ-8804',task:'طلب استبدال عامل — أولوية',status:'pending',priority:'عالية'},
      {id:3,client:'شركة رواد الخدمات',ref:'REQ-8802',task:'بلاغ ضد عامل (تأخر متكرر)',status:'inprogress',priority:'عادية'},
      {id:4,client:'مؤسسة النهضة',ref:'REQ-8797',task:'تجديد عقد الصيانة',status:'inprogress',priority:'عادية'},
      {id:5,client:'مؤسسة البناء الحديث',ref:'REQ-8790',task:'استفسار بنود العقد',status:'completed',priority:'عادية'}
    ],
    escalations:[
      {id:1,client:'مجموعة الإتقان',am:'أ. أحمد عمر',type:'طلب استبدال',overdue:'3 ساعات',ref:'REQ-8804'},
      {id:2,client:'شركة رواد الخدمات',am:'أ. سارة ناصر',type:'بلاغ ضد عامل',overdue:'1 ساعة',ref:'REQ-8802'},
      {id:3,client:'مؤسسة النهضة',am:'أ. أحمد عمر',type:'طلب عمالة',overdue:'5 ساعات',ref:'REQ-8790'}
    ],
    salary:[
      {id:1,name:'محمد رحمن',emp:'EMP-2201',basic:1200,allow:300,deduct:50,status:'pending'},
      {id:2,name:'راجيش كومار',emp:'EMP-2202',basic:1200,allow:300,deduct:0,status:'pending'},
      {id:3,name:'خوان دي لاكروز',emp:'EMP-2203',basic:1500,allow:400,deduct:200,status:'pending'},
      {id:4,name:'عبدالله حسن',emp:'EMP-2204',basic:1200,allow:250,deduct:0,status:'pending'},
      {id:5,name:'سانتوش ثابا',emp:'EMP-2205',basic:1300,allow:300,deduct:500,status:'pending'}
    ],
    creditReqMap:{
      pending:{t:'بانتظار تدقيق الائتمان',c:'text-amber-700 bg-amber-50'},
      onhold:{t:'معلّق لاستكمال المتطلبات',c:'text-violet-700 bg-violet-50'},
      audit_ok:{t:'بانتظار المدير المالي',c:'text-brand-700 bg-brand-50'},
      approved:{t:'معتمد — الحساب مفعّل',c:'text-emerald-700 bg-emerald-50'},
      rejected:{t:'مرفوض — الحساب معلّق',c:'text-rose-700 bg-rose-50'}
    },
    creditAttachDefs:[
      {id:'vat',label:'شهادة الضريبة',required:true,note:'شهادة تسجيل ضريبة القيمة المضافة سارية'},
      {id:'cr',label:'السجل التجاري',required:true,note:'سجل تجاري ساري المفعول'},
      {id:'baladiya',label:'رخصة البلدية',required:true,note:'رخصة بلدية / نشاط سارية'},
      {id:'national_address',label:'العنوان الوطني',required:true,note:'عنوان وطني موثّق للمنشأة'},
      {id:'auth_id',label:'هوية المفوّض',required:true,note:'صورة هوية المفوّض بالتوقيع'},
      {id:'auth_letter',label:'خطاب التفويض',required:true,note:'خطاب تفويض رسمي بالتوقيع والتعاقد'},
      {id:'simah',label:'تقرير سمة',required:true,note:'تقرير ائتماني من سمة'},
      {id:'bayan',label:'تقرير منصة بيان',required:false,note:'إن وُجد — تقرير من منصة بيان'},
      {id:'other',label:'مرفقات أخرى',required:false,note:'أي مستندات داعمة اختيارية'}
    ],
    creditRequests:[
      {id:501,leadId:5,clientId:'CL-1105',client:'فنادق البحر الأحمر',cr:'1010556677',ref:'LD-2026-042',sector:'فندقة',need:'٣٠ عامل تشغيل فندقي',status:'pending',authName:'م. سامي البحيري',authId:'10XXXXXXXX',authEmail:'sami@redseahotels.sa',authPhone:'+966501112233',officerNote:'',holdNote:'',managerNote:'',attachments:null,preset:'partial'},
      {id:502,leadId:6,clientId:'CL-1106',client:'مؤسسة ركن الخليج',cr:'1010334455',ref:'LD-2026-043',sector:'خدمات مساندة',need:'١٥ عامل نظافة',status:'pending',authName:'أ. نورة الركن',authId:'10YYYYYYYY',authEmail:'noura@rukn.sa',authPhone:'+966509998877',officerNote:'',holdNote:'',managerNote:'',attachments:null,preset:'weak'},
      {id:503,leadId:1,clientId:'CL-1101',client:'شركة الواحة للضيافة',cr:'1010445566',ref:'LD-2026-041',sector:'ضيافة',need:'٤٠ عامل ضيافة',status:'audit_ok',authName:'خالد الواحة',authId:'10ZZZZZZZZ',authEmail:'khaled@waha.sa',authPhone:'+966550001122',officerNote:'اكتملت المرفقات الإلزامية وتم التحقق.',holdNote:'',managerNote:'',attachments:null,preset:'complete'}
    ],

    clients:[
      {id:'CL-1001',name:'شركة آفاق المستقبل',contracts:'3 عقود',status:'active'},
      {id:'CL-1002',name:'مؤسسة البناء الحديث',contracts:'1 عقد',status:'verify'},
      {id:'CL-1003',name:'شركة رواد الخدمات',contracts:'5 عقود',status:'active'},
      {id:'CL-1004',name:'مجموعة الإتقان',contracts:'0',status:'suspended'}
    ],
    rooms:[
      {id:1,name:'مبنى A · غرفة 12',beds:['محمد رحمن','راجيش كومار',null,null]},
      {id:2,name:'مبنى A · غرفة 9',beds:['أنور علي',null,null,null]},
      {id:3,name:'مبنى B · غرفة 5',beds:['خوان دي لاكروز',null,null,null]},
      {id:4,name:'مبنى B · غرفة 7',beds:['سانتوش ثابا',null,null,null]}
    ],
    waiting:['عبدالله حسن','بلال أحمد','راميش لال'],

    /* ---------- خصائص محسوبة (Computed) ---------- */
    /* ===== حاسبات المبيعات ===== */
    /* إشعارات تنتظر إجراء: عميل سُجّل حديثاً، أو اكتمل ملفه بعد تعميد الائتمان ولم يُسعَّر بعد */
    get salesInbox(){ return this.salesLeads.filter(function(l){ return l.stage==='neu' || l.stage==='ready'; }); },
    /* الصفقات المفتوحة (سُعِّرت ولم تُوقَّع بعد) */
    get salesOpen(){ return this.salesLeads.filter(function(l){ return l.stage==='quoted' || l.stage==='nego'; }); },
    /* الصفقات المُنجزة (وُقِّعت أو سُلِّمت لمدير الحساب) */
    get salesWon(){ return this.salesLeads.filter(function(l){ return l.stage==='signed' || l.stage==='handed'; }); },
    /* قيمة المبيعات المُحقَّقة = مجموع قيم الصفقات الموقّعة */
    get salesAchieved(){ return this.salesWon.reduce(function(s,l){ return s+l.value; },0); },
    /* نسبة تحقيق المستهدف الشهري */
    get salesPct(){ return Math.min(100, Math.round(this.salesAchieved/this.salesTarget*100)); },
    /* قيمة خط الأنابيب المفتوح (تحت التفاوض) */
    get salesPipeline(){ return this.salesOpen.reduce(function(s,l){ return s+l.value; },0); },
    /* عقود يجب البدء بتجديدها خلال ٣٠ يوماً */
    get renewalsUrgent(){ return this.salesRenewals.filter(function(r){ return r.daysLeft<=30; }); },
    get supQuoteQueue(){ return this.salesLeads.filter(function(l){ return l.quoteReview==='pending_sup'; }); },
    get mgrQuoteQueue(){ return this.salesLeads.filter(function(l){ return l.quoteReview==='pending_mgr'; }); },
    get visitsThisMonth(){ return this.salesVisits.filter(function(v){ return v.month==='2026-08'; }); },
    get visitMonths(){
      var set={}, out=[];
      this.salesVisits.forEach(function(v){ if(v.month) set[v.month]=1; });
      Object.keys(set).sort().reverse().forEach(function(k){ out.push(k); });
      if(!out.length) out=['2026-08'];
      return out;
    },
    get visitsForFilter(){
      var m=this.visitMonthFilter;
      return this.salesVisits.filter(function(v){ return v.month===m; });
    },
    get offersSubmittedCount(){ return this.salesLeads.filter(function(l){ return ['quoted','signed','finance','am','housing','handed'].indexOf(l.stage)>=0; }).length; },
    get contractsSignedCount(){ return this.salesLeads.filter(function(l){ return ['signed','finance','am','housing','handed'].indexOf(l.stage)>=0; }).length; },
    get clientsFullyActivated(){ return this.salesLeads.filter(function(l){ return l.stage==='handed'; }).length; },
    get salesActivityScore(){
      var v=this.visitsThisMonth.length, o=this.offersSubmittedCount, c=this.contractsSignedCount, a=this.clientsFullyActivated;
      var score=Math.min(100, Math.round((v*8)+(o*12)+(c*18)+(a*22)));
      return score;
    },

    /* إجمالي صافي جميع البنود (قبل التدقيق) — يعطي المدقّق حجم الكشف الكامل */
    get salaryTotal(){ return this.salary.reduce(function(s,r){return s+(r.basic+r.allow-r.deduct)},0); },
    /* صافي البنود المعتمدة فقط — يتزايد كلما اعتمد المدقّق بنداً */
    get salaryNet(){ return this.salary.filter(function(r){return r.status==='approved'}).reduce(function(s,r){return s+(r.basic+r.allow-r.deduct)},0); },
    get creditOfficerQueue(){ return this.creditRequests.filter(function(r){ return r.status==='pending'||r.status==='onhold'; }); },
    get creditMgrQueue(){ return this.creditRequests.filter(function(r){ return r.status==='audit_ok'; }); },
    get filteredCreditRequests(){
      var f=this.creditFilter, list=this.creditRequests;
      if(this.role==='fin_credit') list=list.filter(function(r){ return r.status==='pending'||r.status==='onhold'||r.status==='audit_ok'||r.status==='approved'||r.status==='rejected'; });
      if(f==='all') return list;
      return list.filter(function(r){ return r.status===f; });
    },
    get occupiedBeds(){ return this.rooms.reduce(function(s,r){return s+r.beds.filter(function(b){return b}).length},0); },
    get freeBeds(){ return this.rooms.reduce(function(s,r){return s+r.beds.length},0)-this.occupiedBeds; },
    get activeWorkers(){ return this.workers.filter(function(w){return w.status==='active'}).length; },
    get openTickets(){ return this.tickets.filter(function(t){return t.status!=='resolved'}).length; },
    get invoicesDue(){ return this.invoices.filter(function(i){return i.status==='due'||i.status==='overdue'}); },
    get invoicesPaidTotal(){ return this.invoices.filter(function(i){return i.status==='paid'}).reduce(function(s,i){return s+i.paid},0); },
    get invoicesOpenTotal(){ return this.invoicesDue.reduce(function(s,i){return s+i.amount},0); },
    get filteredInvoices(){
      var f=this.invFilter; if(f==='all') return this.invoices;
      return this.invoices.filter(function(i){ return i.status===f; });
    },
    get filteredTickets(){
      var f=this.ticketFilter; if(f==='all') return this.tickets;
      return this.tickets.filter(function(t){ return t.status===f; });
    },
    get pendingCreditLeads(){ return this.salesLeads.filter(function(l){ return l.credit==='pending'||l.credit==='onhold'; }); },
    get roleInbox(){ var r=this.role; return this.inbox.filter(function(n){ return n.role===r; }); },

    get roleInboxUnread(){ return this.roleInbox.some(function(n){ return !n.read; }); },
    get deptList(){ return this.org.slice().sort(function(a,b){ return a.order-b.order; }); },
    get hrUnits(){ var d=this.org.find(function(x){ return x.id==='hr'; }); return d?d.units:[]; },
    get positionsForPick(){
      if(this.pickDept==='client') return [];
      var d=this.org.find(function(x){ return x.id===this.pickDept; }.bind(this));
      if(!d) return [];
      if(d.units){
        var u=d.units.find(function(x){ return x.id===this.pickUnit; }.bind(this))||d.units[0];
        return (u&&u.positions)||[];
      }
      return d.positions||[];
    },
    get rolePathLabel(){
      var m=this.roleMeta[this.role]; if(!m) return '';
      if(this.role==='client') return (m.name||'م. خالد الغامدي')+' · مساحة العميل';
      return (m.name? m.name+' · ':'')+m.label;
    },
    get currentPersonName(){ var m=this.roleMeta[this.role]; return m&&m.name?m.name:''; },
    get myWork(){
      var r=this.role;
      return this.workItems.filter(function(w){ return w.toRole===r || w.fromRole===r || (w.escalatedTo===r); }).slice().sort(function(a,b){ return b.id-a.id; });
    },
    get escalateTargets(){
      var m=this.roleMeta[this.role]; if(!m||!m.reportsTo) return [];
      var chain=[], cur=m.reportsTo, guard=0;
      while(cur && this.roleMeta[cur] && guard++<8){
        var rm=this.roleMeta[cur];
        chain.push({id:cur, label:(rm.name?rm.name+' — ':'')+(rm.short||rm.label)});
        cur=this.roleMeta[cur].reportsTo;
      }
      return chain;
    },
    get nextRouteOptions(){
      var self=this;
      function fmt(k){ var x=self.roleMeta[k]; if(!x) return k; return (x.name?x.name+' — ':'')+(x.short||x.label); }
      var opts=[{id:'client',label:fmt('client')}];
      var m=this.roleMeta[this.role];
      if(m && m.reportsTo) opts.push({id:m.reportsTo, label:'الأعلى · '+fmt(m.reportsTo)});
      Object.keys(this.roleMeta).forEach(function(k){
        if(k==='client'||k===self.role) return;
        var x=self.roleMeta[k];
        if(m && x.dept===m.dept) opts.push({id:k, label:fmt(k)});
      });
      ['as_am','fin_credit','leg_officer','hou_coord','hr_recruit_coord','proc_buyer'].forEach(function(k){
        if(self.roleMeta[k] && !opts.some(function(o){ return o.id===k; })) opts.push({id:k, label:fmt(k)});
      });
      return opts;
    },
    labelOf(roleId){
      var m=this.roleMeta[roleId];
      if(!m) return roleId||'—';
      if(m.name) return m.name+' ('+(m.short||m.label)+')';
      return m.short||m.label;
    },
    onPickDept(){
      if(this.pickDept==='client'){ this.switchRole('client'); return; }
      if(this.pickDept==='hr'){ this.pickUnit=this.pickUnit||'recruit'; }
      var list=this.positionsForPick;
      if(list.length) this.switchRole(list[0].id);
    },
    onPickUnit(){
      var list=this.positionsForPick;
      if(list.length) this.switchRole(list[0].id);
    },
    deadlineLabel(h){ h=Number(h)||24; return 'خلال '+h+' ساعة'; },
    openAction(w, decision){
      this.actionForm={decision:decision||'reply', notes:'', deadlineHours:'24', nextRole: (this.roleMeta[this.role]&&this.roleMeta[this.role].reportsTo)||'client', escalateTo:''};
      if(decision==='escalate'){
        var t=this.escalateTargets[0];
        this.actionForm.escalateTo=t?t.id:'';
        this.actionForm.notes='';
      }
      this.modal={open:true, kind:'action', data:w, title: decision==='escalate'?'تصعيد البند':'تسجيل الرد'};
    },
    openActionFromAm(item, decision){
      var w=this.workItems.find(function(x){ return x.ref===item.ref; });
      if(!w){
        w={id:Date.now(), ref:item.ref, title:item.task, fromRole:'client', toRole:this.role, status:'pending', deadline:'خلال 4 ساعات', decision:null, notes:'', escalatedTo:null, dept:'aftersales', amId:item.id};
        this.workItems.unshift(w);
      }
      this.openAction(w, decision);
    },
    openActionFromEsc(e, decision){
      var w=this.workItems.find(function(x){ return x.ref===e.ref; });
      if(!w){
        w={id:Date.now(), ref:e.ref, title:e.type+' · '+e.client, fromRole:'as_am', toRole:this.role, status:'pending', deadline:'فوري · '+e.overdue, decision:null, notes:'', escalatedTo:null, dept:'aftersales'};
        this.workItems.unshift(w);
      }
      this.openAction(w, decision);
    },
    submitAction(){
      var w=this.modal.data, f=this.actionForm;
      if(!w||!f.decision) return;
      function workLabel(d){ return d==='approve'?'موافقة':(d==='reject'?'رفض':'رد'); }
      if(f.decision==='escalate'){
        if(!f.escalateTo){ this.toast('info','اختر المستهدف','حدد لمن تريد التصعيد.'); return; }
        if(!f.notes || f.notes.trim().length<8){ this.toast('info','ملاحظات إلزامية','أدخل ملاحظات التصعيد (۸ أحرف على الأقل).'); return; }
        var escTo=f.escalateTo;
        var escNotes=f.notes.trim();
        w.status='escalated';
        w.decision='escalate';
        w.notes='';
        w.escalatedTo=escTo;
        w.deadline=null;
        this.workItems.unshift({id:Date.now()+1, ref:w.ref, title:w.title, fromRole:this.role, toRole:escTo, status:'pending', deadline:this.deadlineLabel(8), decision:null, notes:escNotes, escalatedTo:null, dept:this.roleMeta[escTo]?this.roleMeta[escTo].dept:w.dept, privateNotes:true});
        this.logEvent(this.labelOf(this.role),'تم التصعيد',w.ref+' → '+this.labelOf(escTo), this.labelOf(escTo));
        this.notify(escTo,'بند مُصعَّد إليك',w.ref+' — راجع صندوق العمل.',{gotoPage:'desk'});
        this.closeModal();
        this.toast('success','تم التصعيد','انتقلت الحالة إلى «تم التصعيد» ولا يمكن إعادة اختيار المستهدف من هنا.');
        return;
      }
      if(f.decision==='hold'){
        w.status='onhold'; w.decision='hold'; w.notes=(f.notes||'').trim();
        w.deadline=this.deadlineLabel(f.deadlineHours);
        w.toRole=f.nextRole||w.toRole;
        this.logEvent(this.labelOf(this.role),'تعليق','البند '+w.ref+' معلّق — الموعد '+w.deadline, this.labelOf(w.toRole));
        this.notify(w.toRole,'بند معلّق للمتابعة',w.ref,{gotoPage:'desk'});
        this.closeModal(); this.toast('info','معلّق',w.ref); return;
      }
      var map={reply:'replied',approve:'approved',reject:'rejected'};
      w.status=map[f.decision]||'replied';
      w.decision=f.decision;
      w.notes=(f.notes||'').trim();
      w.deadline=this.deadlineLabel(f.deadlineHours);
      var next=f.nextRole||'client';
      this.logEvent(this.labelOf(this.role), workLabel(f.decision), w.ref+' · الموعد '+w.deadline+' · إلى '+this.labelOf(next), this.labelOf(next));
      if(next!==this.role){
        this.workItems.unshift({id:Date.now()+2, ref:w.ref, title:w.title+' — متابعة', fromRole:this.role, toRole:next, status:'pending', deadline:w.deadline, decision:null, notes:w.notes, escalatedTo:null, dept:this.roleMeta[next]?this.roleMeta[next].dept:'aftersales'});
        this.notify(next,'وصلك رد على '+w.ref, workLabel(f.decision)+' من '+this.labelOf(this.role),{gotoPage:'desk'});
      }
      if(next==='client'||f.decision==='approve'||f.decision==='reject'){
        this.notify('client','تحديث على طلبك '+w.ref, workLabel(f.decision)+' — الموعد/المسار محدّث.',{gotoPage:'tickets'});
      }
      this.closeModal();
      this.toast('success','تم تسجيل الرد','الحالة: '+this.workStatusMap[w.status].t+' · الموعد: '+w.deadline+' · إلى: '+this.labelOf(next));
    },
    seedProcurementDemo(){
      var next=(this.roleMeta[this.role]&&this.roleMeta[this.role].reportsTo)||'proc_sup';
      this.workItems.unshift({id:Date.now(), ref:'PO-'+(7000+this.workItems.length), title:'طلب شراء مستلزمات سكن', fromRole:this.role, toRole:next, status:'pending', deadline:this.deadlineLabel(24), decision:null, notes:'', escalatedTo:null, dept:'procurement'});
      this.toast('success','طلب شراء','أُنشئ في صندوق العمل للمشرف.');
    },


    /* ---------- دورة الحياة ---------- */
    init(){
      this.hydrateRoleMeta();
      this.hydrateCreditRequests();
      this.startCountdown();
      this.logEvent('النظام','بدء محاكي MVP','ملف عرض تفاعلي جاهز للمشاركة — بدّل الأدوار أو شغّل سيناريو.','كل الأقسام');
    },
    hydrateRoleMeta(){
      var self=this;
      this.org.forEach(function(d){
        if(d.units){
          d.units.forEach(function(u){
            (u.positions||[]).forEach(function(p){
              self.roleMeta[p.id]={label:d.label+' · '+u.label+' · '+p.label, short:p.label, name:p.name||'', home:p.home, dept:d.id, unit:u.id, level:p.level, reportsTo:p.reportsTo, nav:p.nav, perms:p.perms, denied:p.denied||[]};
            });
          });
        } else {
          (d.positions||[]).forEach(function(p){
            self.roleMeta[p.id]={label:d.label+' · '+p.label, short:p.label, name:p.name||'', home:p.home, dept:d.id, unit:null, level:p.level, reportsTo:p.reportsTo, nav:p.nav, perms:p.perms, denied:p.denied||[]};
          });
        }
      });
      // مزامنة اسم مدير الحساب الظاهر للعميل
      if(self.roleMeta.as_am && self.roleMeta.as_am.name) self.account.amName='أ. '+self.roleMeta.as_am.name;
    },


    /* ---------- محرك المحاكاة الحية ---------- */
    nowStr(){ var d=new Date(); return d.toLocaleTimeString('ar-SA',{hour:'2-digit',minute:'2-digit',second:'2-digit'}); },
    logEvent(from,title,detail,to){
      this.simLog.unshift({id:++this._sim,from:from,title:title,detail:detail,to:to||'',time:this.nowStr()});
      if(this.simLog.length>40) this.simLog.pop();
    },
    notify(role,title,msg,opts){
      opts=opts||{};
      this.inbox.unshift({id:++this._sim,role:role,title:title,msg:msg,time:this.nowStr(),read:false,gotoRole:opts.gotoRole||null,gotoPage:opts.gotoPage||null});
      if(this.inbox.length>60) this.inbox.pop();
      if(role===this.role) this.toast('info',title,msg);
    },

    /* ---------- التنقّل ---------- */
    goApp(){ this.screen='app'; this.role='client'; this.page='dashboard'; },
    switchRole(r){
      if(!this.roleMeta[r]) this.hydrateRoleMeta();
      this.role=r;
      var m=this.roleMeta[r];
      this.page=m?m.home:'dashboard';
      this.pickDept=(m&&m.dept)||'client';
      if(m&&m.unit) this.pickUnit=m.unit;
      this.drawer=false; this.showInbox=false;
    },
    openPage(p){ this.page=p; this.drawer=false; },

    /* ---------- إنشاء الحساب ---------- */
    nextStep(){
      if(this.signupStep<3){ this.signupStep++; return; }
      this.registerNewClient({name:'منشأة جديدة (تسجيل)',cr:'1010'+Math.floor(100000+Math.random()*899999),need:'طلب توريد عمالة — تسجيل ذاتي',sector:'خدمات'});
      this.goApp();
      this.toast('success','تم إنشاء الحساب','أُنشئ Lead للمبيعات وملف للائتمان — بدّل الدور لترى التدفق.');
    },
    prevStep(){ if(this.signupStep>1) this.signupStep--; },

    registerNewClient(data){
      var ref='LD-2026-0'+(44+this.salesLeads.length);
      var leadId=Date.now();
      var lead={id:leadId,client:data.name,cr:data.cr||'1010000000',ref:ref,sector:data.sector||'عام',need:data.need||'عمالة',credit:'pending',stage:'neu',value:0,date:'2026/08/09',quote:null,contract:null,annexes:[],notified:false};
      this.salesLeads.unshift(lead);
      var clId='CL-'+(1100+this.clients.length);
      this.clients.unshift({id:clId,name:data.name,contracts:'0',status:'verify'});
      this.createCreditRequest({leadId:leadId,clientId:clId,client:data.name,cr:lead.cr,ref:ref,sector:lead.sector,need:lead.need,preset:'partial'});
      this.logEvent('العميل','تسجيل منشأة جديدة',data.name+' · '+ref,'موظف الائتمان');
      this.notify('sales_rep','عميل جديد مسجّل',data.name+' بانتظار تدقيق المرفقات الائتمانية.',{gotoPage:'salesSpec'});
      this.notify('fin_credit','طلب ائتمان جديد',data.name+' — راجع المرفقات لكل طلب على حدة.',{gotoPage:'credit'});
      this.notify('sales_mgr','حساب عميل جديد',data.name+' أُضيف (بانتظار الائتمان).',{gotoPage:'salesMgr'});
      return lead;
    },

    /* ---------- النوافذ ---------- */
    openDrill(kind,data){ this.actionNote=''; this.transferForm={kind:'site',target:'',note:''}; if(kind==='quote') this.initQuoteForm(data); var T={workers:'قائمة العمالة',worker:'تفاصيل العامل',contracts:'العقود النشطة',contract:'تفاصيل العقد',finance:'ملخّص المدفوعات',invoice:'تفاصيل الفاتورة',client:'ملف العميل',ticket:'تفاصيل التذكرة',doc:'تفاصيل الوثيقة',attendance:'رفع شيت الحضور',complaint:'طلب دعم جديد',requestLabor:'طلب عمالة إضافية',lead:'ملف الصفقة',quote:'رفع عرض السعر',signed:'رفع نسخة العقد الموقّع',annex:'إضافة ملحق عقد',salesInbox:'إشعارات المبيعات',priceList:'قائمة الأسعار المرجعية',salesOpen:'الصفقات المفتوحة',salesWon:'الصفقات المُنجزة',renewals:'عقود مستحقة التجديد',renewal:'تفاصيل عقد التجديد',visits:'سجل الزيارات والمتابعات',visitsMonth:'زيارات الشهر',action:'تسجيل الرد',creditCase:'تفاصيل طلب الائتمان'}; this.modal={open:true,kind:kind,data:data||null,title:T[kind]||''}; },
    closeModal(){ this.modal.open=false; },

    openTicketWizard(type){
      var opt=this.ticketTypeOptions.find(function(o){return o.id===type;});
      this.ticketForm={type:type||'',title:opt?opt.title:'',contract:this.contracts[0]?this.contracts[0].id:'',workerId:'',site:'',priority:type==='replacement'?'عالية':'متوسطة',description:'',phone:''};
      this.openDrill('complaint');
    },

    submitTicket(){
      var f=this.ticketForm;
      if(!f.type){ this.toast('info','اختر نوع الطلب','حدّد نوع التذكرة قبل الإرسال.'); return; }
      if(!f.contract||!f.title||!f.description){ this.toast('info','حقول ناقصة','أكمل العقد والعنوان والوصف.'); return; }
      var labels={replacement:'استبدال',complaint:'بلاغ',attendance:'حضور',inquiry:'استفسار'};
      var id='TKT-'+(3800+this.tickets.length+1);
      var crm='CAS-'+(88000+this.tickets.length+20);
      var tkt={id:id,title:f.title,type:f.type,typeLabel:labels[f.type]||'دعم',contract:f.contract,status:'open',step:1,pct:20,priority:f.priority,opened:'2026/08/09',crmCase:crm,site:f.site,description:f.description};
      this.tickets.unshift(tkt);
      this.amClients.unshift({id:Date.now(),client:this.account.name,ref:id,task:f.title,status:'pending',priority:f.priority,ticketId:id});
      this.workItems.unshift({id:Date.now()+3,ref:id,title:f.title,fromRole:'client',toRole:'as_am',status:'pending',deadline:f.priority==='عالية'?'خلال 4 ساعات':'خلال 24 ساعة',decision:null,notes:'',escalatedTo:null,dept:'aftersales'});
      this.logEvent('العميل','فتح تذكرة دعم',id+' · '+f.title,'مدير الحساب');
      this.notify('as_am','تذكرة جديدة من العميل',f.title+' ('+id+')',{gotoPage:'desk'});
      if(f.priority==='عالية'){
        this.escalations.unshift({id:Date.now(),client:this.account.name,am:'أ. أحمد عمر',type:labels[f.type]||'دعم',overdue:'تجاوز وشيك',ref:id});
        this.notify('as_sup','تنبيه SLA','تذكرة عالية الأولوية '+id,{gotoPage:'followup'});
        this.logEvent('النظام','تصعيد محتمل',id+' أولوية عالية','المتابعة');
      }
      this.ticketFilter='open'; this.closeModal(); this.page='tickets';
      this.toast('success','تم فتح التذكرة '+id,'أُنشئ Case وأُشعر مدير الحساب.');
    },

    submitLaborRequest(){
      var f=this.laborForm;
      if(!f.contract||!f.job||!f.qty||!f.startDate||!f.site){ this.toast('info','حقول ناقصة','أكمل الحقول المطلوبة.'); return; }
      var ref='REQ-'+(8900+Math.floor(Math.random()*90));
      this.tickets.unshift({id:'TKT-L'+Date.now().toString().slice(-4),title:'طلب عمالة: '+f.qty+' × '+f.job,type:'inquiry',typeLabel:'عمالة',contract:f.contract,status:'open',step:1,pct:15,priority:'متوسطة',opened:'2026/08/09',crmCase:ref,site:f.site,description:f.notes||''});
      this.amClients.unshift({id:Date.now(),client:this.account.name,ref:ref,task:'طلب توريد '+f.qty+' × '+f.job+' · '+f.site,status:'pending',priority:'عادية'});
      this.logEvent('العميل','طلب عمالة إضافية',f.qty+' × '+f.job+' على '+f.contract,'مدير الحساب + المبيعات');
      this.notify('as_am','طلب عمالة إضافية',ref+' · '+f.qty+' × '+f.job,{gotoPage:'am'});
      this.notify('sales_rep','فرصة توسعة عقد',this.account.name+' طلب '+f.qty+' × '+f.job,{gotoPage:'salesSpec'});
      this.laborForm={contract:'',job:'',qty:null,nationality:'بدون تفضيل',startDate:'',duration:'حتى نهاية العقد',site:'',notes:''};
      this.closeModal(); this.page='tickets'; this.ticketFilter='open';
      this.toast('success','تم استلام طلب العمالة','المرجع '+ref+' — مدير الحساب سيتابع.');
    },

    toast(type,title,msg){ var id=++this._tid; this.toasts.push({id:id,type:type,title:title,msg:msg}); var self=this; setTimeout(function(){ self.dismiss(id); },5200); },
    dismiss(id){ this.toasts=this.toasts.filter(function(t){return t.id!==id}); },

    /* ---------- مدير الحساب ---------- */
    advance(item){
      if(item.status==='pending'){
        item.status='inprogress';
        this.logEvent('مدير الحساب','بدء المعالجة',item.ref+' · '+item.task,'العميل');
        this.notify('client','طلبك قيد المعالجة',item.ref+' — بدأ فريق التشغيل العمل عليه.',{gotoPage:'tickets'});
        this.toast('info','بدء المعالجة','الطلب '+item.ref+' قيد المعالجة.');
      } else if(item.status==='inprogress'){
        item.status='completed';
        var t=this.tickets.find(function(x){ return x.id===item.ref||x.crmCase===item.ref||x.id===item.ticketId; });
        if(t){ t.status='resolved'; t.step=4; t.pct=100; }
        this.escalations=this.escalations.filter(function(e){ return e.ref!==item.ref; });
        this.logEvent('مدير الحساب','إنجاز الطلب',item.ref,'العميل');
        this.notify('client','تم حل طلبك',item.ref+' أُغلق بنجاح.',{gotoPage:'tickets'});
        this.toast('success','إنجاز الطلب','تم إنجاز '+item.ref+' وإشعار العميل.');
      }
    },

    /* ---------- المبيعات ---------- */
    readLead(l){ l.notified=true; this.openDrill('lead', l); },

    quoteMonths(duration){
      var m=parseInt(String(duration||'').replace(/[^\d]/g,''),10);
      return m>0?m:1;
    },
    quoteUnitPrice(row){
      if(!row) return 0;
      var salary=Number(row.salary)||0;
      var housing=row.clientHousing?0:(Number(row.housing)||0);
      var food=row.clientFood?0:(Number(row.food)||0);
      var transport=row.clientTransport?0:(Number(row.transport)||0);
      return salary+housing+food+transport+1000;
    },
    quoteLineTotal(row){
      return this.quoteUnitPrice(row)*(Number(row.qty)||0)*this.quoteMonths(row.duration);
    },
    quoteClientAllowLabel(row){
      if(!row) return '-';
      var parts=[];
      if(row.clientHousing) parts.push('سكن');
      if(row.clientFood) parts.push('طعام');
      if(row.clientTransport) parts.push('مواصلات');
      return parts.length?parts.join(' + '):'—';
    },
    allAllowancesOnClient(row){
      return !!(row&&row.clientHousing&&row.clientFood&&row.clientTransport);
    },
    setAllAllowancesOnClient(row,on){
      if(!row) return;
      row.clientHousing=!!on; row.clientFood=!!on; row.clientTransport=!!on;
    },
    serializeQuoteLine(r){
      var unit=this.quoteUnitPrice(r);
      var total=this.quoteLineTotal(r);
      return {
        nat:r.nat, job:r.job, qty:Number(r.qty)||0, duration:r.duration||'',
        salary:Number(r.salary)||0, housing:Number(r.housing)||0, food:Number(r.food)||0, transport:Number(r.transport)||0,
        clientHousing:!!r.clientHousing, clientFood:!!r.clientFood, clientTransport:!!r.clientTransport,
        unit:unit, total:total
      };
    },
    emptyQuoteLine(){
      return {nat:'',job:'',qty:1,duration:'24 شهر',salary:700,housing:500,food:300,transport:500,clientHousing:false,clientFood:false,clientTransport:false,unit:3000,total:0};
    },
    quoteLinesSum(lines){
      var self=this;
      if(!lines||!lines.length) return 0;
      return lines.reduce(function(s,r){ return s+self.quoteLineTotal(r); },0);
    },
    get quoteFormTotal(){ return this.quoteLinesSum(this.quoteForm.lines); },
    addQuoteLine(){
      this.quoteForm.lines.push(this.emptyQuoteLine());
    },
    removeQuoteLine(i){
      if(this.quoteForm.lines.length<=1) return;
      this.quoteForm.lines.splice(i,1);
    },
    initQuoteForm(lead){
      this.quoteForm={
        valid:'2026/09/08',
        discountPct:0,
        lines:[Object.assign(this.emptyQuoteLine(),{nat:'الهند',job:'عامل مستودعات',qty:10})]
      };
      if(lead && lead.need){ /* تلميح من نص الاحتياج */ }
    },

    submitQuote(l){
      if(this.role==='sales_sup'||this.role==='sales_mgr'){ this.toast('info','خارج صلاحيتك','رفع مسودّة العرض من لوحة أخصائي المبيعات فقط.'); return; }
      if(l.credit!=='approved'){ this.toast('info','لا يمكن إرسال العرض','بانتظار تعميد الائتمان أولاً.'); return; }
      var self=this;
      var lines=(this.quoteForm.lines||[]).filter(function(r){ return (r.nat||'').trim() && (r.job||'').trim() && Number(r.qty)>0; });
      if(!lines.length){ this.toast('info','أضف بنود العرض','الجنسية والمهنة والعدد مطلوبة.'); return; }
      var bad=lines.some(function(r){ return !(r.duration||'').trim() || !(Number(r.salary)>=0) || self.quoteLineTotal(r)<=0; });
      if(bad){ this.toast('info','أكمل التسعير','مدة العقد والراتب مطلوبان، ويجب أن يكون مبلغ العامل أكبر من صفر.'); return; }
      var mapped=lines.map(function(r){ return self.serializeQuoteLine(r); });
      var amount=mapped.reduce(function(s,r){ return s+r.total; },0);
      var disc=Number(this.quoteForm.discountPct)||0;
      this._q++;
      var qno='QT-2026-0'+(18+this._q);
      l.quote={no:qno, amount:amount, valid:this.quoteForm.valid||'2026/09/08', discountPct:disc, lines:mapped};
      l.value=amount; l.stage='quoted'; l.notified=true;
      l.quoteReview = disc>10 ? 'pending_mgr' : 'pending_sup';
      this.logEvent('أخصائي المبيعات','مسودّة عرض سعر',qno+' · '+mapped.length+' بنود · '+amount.toLocaleString()+' ر.س', disc>10?'مدير المبيعات':'مشرف المبيعات');
      if(disc>10){
        this.notify('sales_mgr','عرض بخصم خارج السقف',qno+' · '+disc+'٪ · '+l.client,{gotoPage:'salesMgr'});
        this.toast('success','رُفعت المسودّة','خُصّص الاعتماد لمدير المبيعات (خصم > 10٪).');
      } else {
        this.notify('sales_sup','عرض بانتظار مراجعتك',qno+' · '+l.client,{gotoPage:'salesSup'});
        this.toast('success','رُفعت المسودّة','بانتظار اعتماد مشرف المبيعات قبل إرسالها للعميل.');
      }
      this.closeModal();
    },

    releaseQuoteToClient(l){
      if(!l.quote) return;
      var amount=l.quote.amount, qno=l.quote.no;
      if(!this.clientQuotes.some(function(q){ return q.no===qno; })){
        this.clientQuotes.unshift({id:Date.now(),leadId:l.id,no:qno,amount:amount,valid:l.quote.valid,status:'sent',client:l.client,lines:l.quote.lines||[]});
      }
      l.quoteReview='approved';
      this.notify('client','عرض سعر جديد',qno+' بقيمة '+amount.toLocaleString()+' ر.س — راجع لوحة التحكم.',{gotoPage:'dashboard'});
    },

    supApproveQuote(l){
      if(this.role!=='sales_sup'){ this.toast('info','صلاحية المشرف فقط',''); return; }
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      var disc=l.quote?l.quote.discountPct:0;
      if(disc>10){ this.toast('info','خارج سقفك','خصم > 10٪ — صعّد لمدير المبيعات.'); return; }
      this.releaseQuoteToClient(l);
      this.logEvent('مشرف المبيعات','اعتماد عرض ضمن السقف',l.quote.no+' · '+note,'العميل');
      this.notify('sales_rep','اعتُمد عرضك',l.quote.no+' أُرسل للعميل.',{gotoPage:'salesSpec'});
      this.actionNote='';
      this.toast('success','تم الاعتماد','أُرسل العرض للعميل.');
    },

    supReturnQuote(l){
      if(this.role!=='sales_sup'){ this.toast('info','صلاحية المشرف فقط',''); return; }
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      l.quoteReview=null; l.stage='ready';
      this.logEvent('مشرف المبيعات','إعادة عرض للتعديل',(l.quote?l.quote.no:'')+' · '+note,'أخصائي المبيعات');
      this.notify('sales_rep','مطلوب تعديل العرض',l.client+' · '+note,{gotoPage:'salesSpec'});
      this.actionNote='';
      this.toast('info','أُعيد للأخصائي',note);
    },

    supEscalateQuote(l){
      if(this.role!=='sales_sup'){ this.toast('info','صلاحية المشرف فقط',''); return; }
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      l.quoteReview='pending_mgr';
      this.logEvent('مشرف المبيعات','تصعيد عرض للمدير',(l.quote?l.quote.no:'')+' · '+note,'مدير المبيعات');
      this.notify('sales_mgr','عرض مصعّد للاعتماد',l.client+' · '+note,{gotoPage:'salesMgr'});
      this.actionNote='';
      this.toast('success','تم التصعيد','مدير المبيعات');
    },

    supReassignLead(l){
      if(this.role!=='sales_sup'){ this.toast('info','صلاحية المشرف فقط',''); return; }
      var note=(this.actionNote||'إعادة توجيه ومتابعة من المشرف').trim();
      this.logEvent('مشرف المبيعات','إعادة توجيه صفقة',l.ref+' · '+note,'أخصائي المبيعات');
      this.notify('sales_rep','صفقة أُعيد توجيهها',l.client+' · '+note,{gotoPage:'salesSpec'});
      this.toast('success','تمت إعادة التوجيه',l.client);
    },

    mgrFinalApproveQuote(l){
      if(this.role!=='sales_mgr'){ this.toast('info','صلاحية المدير فقط',''); return; }
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      this.releaseQuoteToClient(l);
      this.logEvent('مدير المبيعات','اعتماد نهائي للعرض',l.quote.no+' · '+note,'العميل');
      this.notify('sales_rep','اعتماد نهائي لعرضك',l.quote.no,{gotoPage:'salesSpec'});
      this.notify('sales_sup','اعتمد المدير عرضاً مصعّداً',l.quote.no,{gotoPage:'salesSup'});
      this.actionNote='';
      this.toast('success','اعتماد نهائي','أُرسل للعميل.');
    },

    mgrRejectQuote(l){
      if(this.role!=='sales_mgr'){ this.toast('info','صلاحية المدير فقط',''); return; }
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      l.quoteReview=null; l.stage='ready';
      this.logEvent('مدير المبيعات','رفض عرض', (l.quote?l.quote.no:'')+' · '+note,'أخصائي المبيعات');
      this.notify('sales_rep','رُفض العرض — عدّل المسودّة',l.client+' · '+note,{gotoPage:'salesSpec'});
      this.actionNote='';
      this.toast('info','رُفض العرض',note);
    },


    acceptQuote(q){
      q.status='accepted';
      var l=this.salesLeads.find(function(x){ return x.id===q.leadId; });
      if(l){ l.stage='nego'; }
      this.logEvent('العميل','قبول عرض السعر',q.no,'المبيعات');
      this.notify('sales_rep','العميل قبل العرض',q.no+' — ادخل للتفاوض/التوقيع.',{gotoPage:'salesSpec'});
      this.toast('success','تم قبول العرض','أُشعر موظف المبيعات للمتابعة.');
    },
    rejectQuote(q){
      q.status='rejected';
      this.logEvent('العميل','رفض عرض السعر',q.no,'المبيعات');
      this.notify('sales_rep','العميل رفض العرض',q.no,{gotoPage:'salesSpec'});
      this.toast('info','تم رفض العرض','أُشعر المبيعات.');
    },

    toNegotiation(l){ l.stage='nego'; this.logEvent('المبيعات','تحويل للتفاوض',l.client,'—'); this.toast('info','تحويل للتفاوض','صفقة '+l.client+' قيد التفاوض.'); },

    submitContract(l){
      var no=(this.contractForm.no||'').trim();
      if(!no){ this.toast('info','رقم العقد مطلوب','أدخل رقم العقد.'); return; }
      l.contract={no:no, signed:this.contractForm.date||'2026/08/09'};
      l.stage='signed';
      this.contracts.unshift({id:no,title:'عقد تشغيل — '+l.client,count:Number((l.need.match(/\d+/)||[10])[0]),occ:0,elapsed:0,remain:'12 شهراً'});
      this.logEvent('المبيعات','رفع عقد موقّع',no+' · '+l.client,'المالية + العقود');
      this.notify('fin_acc','عقد جديد للفوترة',no,{gotoPage:'finance'});
      this.notify('client','عقدك جاهز',no+' رُفع بنجاح.',{gotoPage:'contracts'});
      this.closeModal();
      this.toast('success','تم رفع نسخة العقد',no);
    },

    submitAnnex(l){
      if(!l.contract){ this.toast('info','لا يوجد عقد','ارفع العقد أولاً.'); return; }
      var type=this.annexForm.type||'زيادة عمالة';
      var d=(this.annexForm.detail||'').trim();
      if(!d){ this.toast('info','تفاصيل الملحق مطلوبة','اكتب وصف التعديل.'); return; }
      l.annexes.push({no:'ANX-'+l.contract.no+'-'+(l.annexes.length+1), type:type, detail:d, date:'2026/08/09'});
      this.logEvent('المبيعات','ملحق عقد',type+' على '+l.contract.no,'مدير الحساب');
      this.notify('as_am','ملحق عقد جديد',type+' · '+l.client,{gotoPage:'am'});
      this.closeModal();
      this.toast('success','تمت إضافة ملحق العقد',type);
    },

    handover(l){
      if(this.role!=='sales_mgr' && this.role!=='SUPER_ADMIN'){ this.toast('info','صلاحية مدير المبيعات فقط','التسليم النهائي من لوحة المدير.'); return; }
      if(!l.contract){ this.toast('info','لا يمكن التسليم','ارفع العقد أولاً.'); return; }
      l.stage='handed';
      this.amClients.unshift({id:Date.now(),client:l.client,ref:l.contract.no,task:'تشغيل عقد جديد — استقدام وتوزيع',status:'pending',priority:'عالية'});
      this.waiting.push('عامل جديد — '+l.client);
      var cl=this.clients.find(function(c){ return c.name===l.client; });
      if(cl){ cl.status='active'; cl.contracts='1 عقد'; }
      this.logEvent('المبيعات','تسليم للتشغيل',l.client+' · '+l.contract.no,'مدير الحساب + السكن');
      this.notify('as_am','عميل مُسلَّم للتشغيل',l.client,{gotoPage:'am'});
      this.notify('hou_coord','عمالة بانتظار التسكين','مرتبطة بعقد '+l.contract.no,{gotoPage:'housing'});
      this.notify('client','بدأ التشغيل','فريق التشغيل استلم عقدك.',{gotoPage:'dashboard'});
      this.toast('success','تم تسليم العميل','سُلِّم لمدير الحساب والسكن.');
    },

    logVisit(l){
      this.salesVisits.unshift({id:Date.now(), client:l.client, type:'متابعة', date:'2026/08/09', note:'متابعة دورية مسجّلة من لوحة المبيعات.'});
      this.logEvent('المبيعات','تسجيل متابعة',l.client,'—');
      this.toast('success','تم تسجيل المتابعة',l.client);
    },

    startRenewal(r){
      r.status='will_renew';
      if((this.actionNote||'').trim()) r.notes=this.actionNote.trim();
      this.salesLeads.unshift({id:Date.now(),client:r.client,cr:'—',ref:'RN-'+r.no,sector:'تجديد',need:r.workers+' عامل · تجديد',credit:'approved',stage:'ready',value:r.value,date:'2026/08/09',quote:null,contract:null,annexes:[],notified:false});
      this.logEvent('المبيعات','بدء تجديد',r.no+(this.actionNote?(' · '+this.actionNote):''),'المبيعات');
      this.notify('as_am','تجديد عقد قريب',r.no+' · '+r.client,{gotoPage:'am'});
      this.closeModal();
      this.toast('success','بدء إجراءات التجديد',r.no);
    },

    pipelineIndex(stage){
      var order=['visited','nego','quoted','signed','finance','am','housing','handed'];
      var map={neu:-1,ready:0,visited:0,nego:1,quoted:2,signed:3,finance:4,am:5,housing:6,handed:7};
      return map[stage]!=null?map[stage]:-1;
    },

    captureVisitGeo(){
      var self=this;
      if(!navigator.geolocation){
        self.visitForm.lat=24.7136; self.visitForm.lng=46.6753;
        self.visitForm.mapsUrl='https://www.google.com/maps?q=24.7136,46.6753';
        self.toast('info','محاكاة موقع','تم تعيين إحداثيات تجريبية (الرياض).');
        return;
      }
      navigator.geolocation.getCurrentPosition(function(pos){
        self.visitForm.lat=pos.coords.latitude;
        self.visitForm.lng=pos.coords.longitude;
        self.visitForm.mapsUrl='https://www.google.com/maps?q='+pos.coords.latitude+','+pos.coords.longitude;
        self.toast('success','تم ربط الموقع','إحداثيات الزيارة من جهازك.');
      }, function(){
        self.visitForm.lat=24.7136; self.visitForm.lng=46.6753;
        self.visitForm.mapsUrl='https://www.google.com/maps?q=24.7136,46.6753';
        self.toast('info','تعذّر GPS','استُخدمت إحداثيات افتراضية للعرض.');
      }, {enableHighAccuracy:true, timeout:8000});
    },

    submitFieldVisit(){
      var f=this.visitForm;
      if(!(f.client||'').trim()){ this.toast('info','اسم العميل مطلوب',''); return; }
      if(!f.mapsUrl){ this.captureVisitGeo(); }
      var month=this.visitMonthFilter||'2026-08';
      var visit={id:Date.now(),client:f.client.trim(),type:'زيارة ميدانية',date:'2026/08/09',month:month,note:(f.note||'')+(f.address?' · '+f.address:'')+(f.contact?' · '+f.contact:''),lat:f.lat,lng:f.lng,mapsUrl:f.mapsUrl||'',done:true};
      this.salesVisits.unshift(visit);
      var lead=this.salesLeads.find(function(l){ return l.client===f.client.trim(); });
      if(lead){
        if(lead.stage==='neu'||lead.stage==='ready') lead.stage='visited';
      } else {
        this.salesLeads.unshift({id:Date.now()+1,client:f.client.trim(),cr:'—',ref:'LD-V-'+Date.now().toString().slice(-4),sector:'زيارة ميدانية',need:f.address||'بعد الزيارة',credit:'pending',stage:'visited',value:0,date:'2026/08/09',quote:null,contract:null,annexes:[],notified:true});
      }
      this.logEvent('أخصائي المبيعات','زيارة ميدانية',f.client+(f.mapsUrl?' · Maps':''),'خط الصفقات');
      this.visitForm={client:'',contact:'',phone:'',address:'',lat:null,lng:null,note:'',mapsUrl:''};
      this.toast('success','تم حفظ الزيارة','العميل في مرحلة «تمت الزيارة».');
    },

    advanceLead(l, stage){
      var note=(this.actionNote||'').trim();
      if(!note){ this.toast('info','الملاحظات مطلوبة','اكتب ملاحظة قبل تأكيد المرحلة.'); return; }
      var mgrOnly=['finance','am','housing','handed'];
      if(mgrOnly.indexOf(stage)>=0 && this.role!=='sales_mgr'){ this.toast('info','صلاحية المدير فقط','هذه المرحلة من لوحة مدير المبيعات.'); return; }
      if((stage==='nego'||stage==='quoted') && this.role!=='sales_rep' && this.role!=='sales_sup'){ /* ok */ }
      l.stage=stage;
      if(stage==='finance'){ this.notify('fin_mgr','اعتماد تفعيل عميل',l.client+' · '+note,{gotoPage:'finance'}); }
      if(stage==='am'){ this.notify('as_am','عميل محوّل لمدير حساب',l.client+' · '+note,{gotoPage:'am'}); }
      if(stage==='housing'){ this.notify('hou_coord','تسليم عمالة مطلوب',l.client+' · '+note,{gotoPage:'housing'}); }
      if(stage==='handed'){
        this.notify('client','اكتمل التشغيل',l.client,{gotoPage:'dashboard'});
        this.notify('as_am','عميل مفعّل بالكامل',l.client,{gotoPage:'am'});
      }
      this.logEvent('أخصائي المبيعات','تقدّم مرحلة → '+stage,l.client+' · '+note,'خط الصفقات');
      this.actionNote='';
      this.toast('success','تم تحديث المرحلة',this.leadMap[stage]?this.leadMap[stage].t:stage);
    },

    applyWorkerTransfer(w){
      var note=(this.transferForm.note||'').trim();
      if(!this.transferForm.target){ this.toast('info','اختر الوجهة',''); return; }
      if(note.length<4){ this.toast('info','الملاحظات مطلوبة','اكتب سبب النقل.'); return; }
      if(this.transferForm.kind==='site') w.location=this.transferForm.target;
      else w.room=this.transferForm.target;
      this.logEvent('العميل','نقل عامل',w.name+' → '+this.transferForm.target+' · '+note,'السكن / التشغيل');
      this.notify('hou_coord','طلب نقل موقع/سكن',w.name+' · '+note,{gotoPage:'housing'});
      this.notify('as_am','نقل عامل بطلب العميل',w.name,{gotoPage:'am'});
      this.toast('success','تم تنفيذ النقل',w.name);
      this.transferForm={kind:'site',target:'',note:''};
    },

    workerStatusAction(w, action){
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      if(action==='ticket'){
        this.tickets.unshift({id:'TK-'+Date.now().toString().slice(-6),title:'متابعة عامل: '+w.name,contract:w.contract,status:'open',step:1,pct:15,priority:'متوسطة',typeLabel:'حضور/موقع',opened:'الآن',crmCase:'CAS-'+Date.now().toString().slice(-5)});
        this.logEvent('العميل','تذكرة من بطاقة عامل',w.name+' · '+note,'الدعم');
        this.toast('success','فُتحت تذكرة',w.name);
      } else {
        w.status=action;
        this.logEvent('العميل','تحديث حالة عامل',w.name+' → '+action+' · '+note,'HR / التشغيل');
        this.toast('success','تم تحديث الحالة',this.statusMap[action]?this.statusMap[action].t:action);
      }
      this.actionNote='';
    },

    clientCardAction(kind, action, data){
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة','أضف ملاحظة قبل الإجراء.'); return; }
      if(kind==='contract'){
        if(action==='download') this.toast('info','تحميل العقد',data.id+' · '+note);
        if(action==='renew_request'){ this.notify('sales_rep','طلب تجديد من العميل',data.id+' · '+note,{gotoPage:'salesSpec'}); this.toast('success','أُرسل طلب التجديد',''); }
        if(action==='labor_expand'){ this.openDrill('requestLabor'); return; }
      }
      if(kind==='ticket'){
        if(action==='followup'){ data.step=Math.min(4,(data.step||1)+1); data.pct=Math.min(100,(data.pct||0)+20); data.status='progress'; this.toast('success','تم تسجيل المتابعة',note); }
        if(action==='escalate'){ data.priority='عالية'; this.notify('as_sup','تصعيد تذكرة',data.id+' · '+note,{gotoPage:'followup'}); this.toast('success','تم التصعيد',''); }
        if(action==='close'){ data.status='resolved'; data.step=4; data.pct=100; this.toast('success','أُغلقت التذكرة',note); }
      }
      if(kind==='invoice'){
        if(action==='pdf') this.toast('info','PDF',data.id+' · '+note);
        if(action==='pay'){ this.notify('fin_acc','إيصال سداد',data.id+' · '+note,{gotoPage:'finance'}); this.toast('success','رُفع الإيصال',''); }
        if(action==='dispute'){ this.notify('fin_acc','اعتراض فاتورة',data.id+' · '+note,{gotoPage:'finance'}); this.toast('info','سُجّل الاعتراض',note); }
      }
      this.logEvent('العميل',kind+':'+action,note,'—');
      this.actionNote='';
    },

    renewalAction(r, status){
      var note=(this.actionNote||'').trim();
      if(note.length<3){ this.toast('info','الملاحظات مطلوبة',''); return; }
      r.status=status; r.notes=note;
      this.logEvent('أخصائي المبيعات','تجديد: '+status,r.no+' · '+note,'المبيعات');
      if(status==='renewed') this.notify('as_am','عقد جُدّد',r.no,{gotoPage:'am'});
      if(status==='declined') this.notify('sales_mgr','عميل لا يرغب بالتجديد',r.no+' · '+note,{gotoPage:'salesMgr'});
      this.actionNote='';
      this.toast('success','تم تحديث حالة التجديد',this.renewMap[status].t);
    },


    /* ---------- المتابعة ---------- */
    reassign(e){
      this.escalations=this.escalations.filter(function(x){return x.id!==e.id});
      this.logEvent('المتابعة','إعادة تعيين',e.ref,'مدير حساب آخر');
      this.notify('as_am','أُعيد تعيين تذكرة إليك',e.ref,{gotoPage:'am'});
      this.toast('success','إعادة تعيين',e.ref);
    },
    intervene(e){
      this.escalations=this.escalations.filter(function(x){return x.id!==e.id});
      var item=this.amClients.find(function(a){ return a.ref===e.ref; });
      if(item) item.status='inprogress';
      this.logEvent('المتابعة','تدخّل مباشر',e.ref,'الإدارة');
      this.notify('sales_mgr','تدخّل متابعة على تذكرة',e.ref,{gotoPage:'admin'});
      this.notify('client','فريق المتابعة يتابع طلبك',e.ref,{gotoPage:'tickets'});
      this.toast('info','تدخّل مباشر',e.ref);
    },

    /* ---------- المالية ---------- */
    approveSheet(){
      var left=this.salary.filter(function(r){return r.status==='pending'}).length;
      if(left){ this.toast('info','لا يمكن الاعتماد بعد','تبقّى '+left+' بند/بنود.'); return; }
      this.logEvent('المالية','اعتماد كشف رواتب','صافي '+this.salaryNet.toLocaleString()+' ر.س','حماية الأجور');
      this.notify('sales_mgr','كشف رواتب مُعتمد','صافي '+this.salaryNet.toLocaleString(),{gotoPage:'admin'});
      this.toast('success','اعتماد الكشف','أُحيل للصرف.');
    },

    /* ---------- الائتمان (موظف مستقل → مدير مالي → تفعيل/تعليق العميل) ---------- */
    buildAttachments(preset){
      preset=preset||'partial';
      return this.creditAttachDefs.map(function(d){
        var status='missing';
        if(preset==='complete') status = d.required ? 'uploaded' : (d.id==='bayan'?'uploaded':'missing');
        else if(preset==='partial'){
          if(d.id==='vat'||d.id==='cr'||d.id==='national_address'||d.id==='auth_id'||d.id==='auth_letter') status='uploaded';
          else if(d.id==='baladiya'||d.id==='simah') status='missing';
          else if(d.id==='bayan') status='missing';
          else status='missing';
        } else { // weak
          if(d.id==='cr'||d.id==='vat') status='uploaded';
          else status='missing';
        }
        return {id:d.id,label:d.label,required:d.required,note:d.note,status:status};
      });
    },
    hydrateCreditRequests(){
      var self=this;
      this.creditRequests.forEach(function(r){
        if(!r.attachments || !r.attachments.length){
          r.attachments=self.buildAttachments(r.preset||'partial');
          if(r.status==='audit_ok'||r.status==='approved'){
            r.attachments.forEach(function(a){ if(a.required) a.status='verified'; });
          }
        }
      });
    },
    createCreditRequest(opts){
      opts=opts||{};
      var r={
        id:Date.now()+Math.floor(Math.random()*99),
        leadId:opts.leadId||null,
        clientId:opts.clientId||null,
        client:opts.client||'عميل',
        cr:opts.cr||'—',
        ref:opts.ref||('CRQ-'+Date.now().toString().slice(-6)),
        sector:opts.sector||'—',
        need:opts.need||'—',
        status:'pending',
        authName:opts.authName||'مفوّض المنشأة',
        authId:opts.authId||'10XXXXXXXX',
        authEmail:opts.authEmail||'auth@client.sa',
        authPhone:opts.authPhone||'+9665XXXXXXX',
        officerNote:'', holdNote:'', managerNote:'',
        attachments:this.buildAttachments(opts.preset||'partial')
      };
      this.creditRequests.unshift(r);
      this.workItems.unshift({id:Date.now()+7,ref:r.ref,title:'تدقيق مرفقات · '+r.client,fromRole:'client',toRole:'fin_credit',status:'pending',deadline:this.deadlineLabel(24),decision:null,notes:'',escalatedTo:null,dept:'finance'});
      return r;
    },
    creditAttachStats(r){
      var atts=r.attachments||[];
      var required=atts.filter(function(a){return a.required;});
      var verified=required.filter(function(a){return a.status==='verified';}).length;
      var missing=required.filter(function(a){return a.status==='missing';}).length;
      var optional=atts.filter(function(a){return !a.required && a.status!=='missing';}).length;
      return {required:required.length, verified:verified, missing:missing, optional:optional};
    },
    openCreditCase(r){
      this.creditNote=r.holdNote||r.officerNote||r.managerNote||'';
      this.openDrill('creditCase', r);
    },
    toggleCreditAttach(r, a){
      if(!(this.role==='fin_credit' && (r.status==='pending'||r.status==='onhold'))) return;
      if(a.status==='missing'){ this.toast('info','المرفق غير مرفوع','لا يمكن التحقق قبل رفع الملف من العميل.'); return; }
      a.status = a.status==='verified' ? 'uploaded' : 'verified';
    },
    creditMarkAllRequired(r){
      (r.attachments||[]).forEach(function(a){
        if(a.required){ if(a.status==='missing') a.status='uploaded'; a.status='verified'; }
      });
    },
    syncLeadCredit(r, creditStatus, stage){
      if(!r.leadId) return;
      var l=this.salesLeads.find(function(x){ return x.id===r.leadId; });
      if(!l) l=this.salesLeads.find(function(x){ return x.ref===r.ref; });
      if(l){ l.credit=creditStatus; if(stage) l.stage=stage; l.notified=false; }
    },
    syncClientAccount(r, status){
      var cl=null;
      if(r.clientId) cl=this.clients.find(function(c){ return c.id===r.clientId; });
      if(!cl) cl=this.clients.find(function(c){ return c.name===r.client || c.name.indexOf(r.client)===0; });
      if(cl) cl.status=status;
      // حساب بوابة العميل الحالي إن طابق الاسم
      if(this.account && (this.account.name.indexOf(r.client)===0 || r.client.indexOf('آفاق')>=0 && this.account.name.indexOf('آفاق')>=0)){
        // لا نعلّق حساب العرض التجريبي الرئيسي إلا إن كان الطلب يخصه
      }
      if(cl && cl.id===this.account.id) this.account.status=status;
    },
    creditHold(r){
      var note=(this.creditNote||'').trim();
      if(note.length<6){ this.toast('info','ملاحظة مطلوبة','اكتب المتطلبات الناقصة للتعليق.'); return; }
      r.status='onhold'; r.holdNote=note; r.officerNote=note;
      this.syncLeadCredit(r,'onhold','neu');
      this.syncClientAccount(r,'suspended');
      this.logEvent('موظف الائتمان','تعليق لاستكمال المتطلبات',r.ref+' · '+r.client,'العميل');
      this.notify('client','حسابك معلّق لاستكمال المرفقات',note,{gotoPage:'profile'});
      this.notify('sales_rep','تعليق ائتماني',r.client+' بانتظار استكمال مستندات.',{gotoPage:'salesSpec'});
      this.workItems.unshift({id:Date.now(),ref:r.ref,title:'استكمال مرفقات · '+r.client,fromRole:'fin_credit',toRole:'client',status:'onhold',deadline:this.deadlineLabel(48),decision:'hold',notes:note,escalatedTo:null,dept:'finance'});
      this.closeModal();
      this.toast('info','تم التعليق','أُشعر العميل وأُعلّق الحساب حتى استكمال المتطلبات.');
    },
    creditApproveAudit(r){
      var stats=this.creditAttachStats(r);
      if(stats.missing>0){ this.toast('info','مرفقات ناقصة','ارفع/تحقق من كل المرفقات الإلزامية أو علّق الطلب.'); return; }
      if(stats.verified<stats.required){ this.toast('info','أكمل التحقق','ضع علامة تحقق على جميع المرفقات الإلزامية قبل الترحيل.'); return; }
      r.status='audit_ok';
      r.officerNote=(this.creditNote||'').trim()||'تم التحقق من المرفقات الإلزامية.';
      this.syncLeadCredit(r,'pending','neu');
      this.logEvent('موظف الائتمان','موافقة تدقيق وترحيل',r.ref+' · '+r.client,'المدير المالي');
      this.notify('fin_mgr','ملف ائتماني بانتظار اعتمادك',r.client+' · '+r.ref,{gotoPage:'finance'});
      this.workItems.unshift({id:Date.now(),ref:r.ref,title:'اعتماد نهائي ائتمان · '+r.client,fromRole:'fin_credit',toRole:'fin_mgr',status:'pending',deadline:this.deadlineLabel(8),decision:null,notes:r.officerNote,escalatedTo:null,dept:'finance'});
      this.closeModal();
      this.toast('success','رُحّل للمدير المالي','بعد الاعتماد النهائي يُفعّل حساب العميل.');
    },
    creditReject(r){
      var note=(this.creditNote||'').trim();
      if(note.length<6){ this.toast('info','سبب الرفض مطلوب','اكتب سبب الرفض.'); return; }
      r.status='rejected'; r.officerNote=note; r.holdNote=note;
      this.syncLeadCredit(r,'rejected','neu');
      this.syncClientAccount(r,'suspended');
      this.logEvent('موظف الائتمان','رفض ائتماني',r.ref+' · '+r.client,'المدير المالي / العميل');
      this.notify('fin_mgr','رفض من موظف الائتمان',r.client+' — للحفظ والمتابعة.',{gotoPage:'credit'});
      this.notify('client','تعذّر قبول الملف الائتماني','حسابك معلّق. السبب: '+note,{gotoPage:'profile'});
      this.notify('sales_rep','رفض ائتماني',r.client,{gotoPage:'salesSpec'});
      this.closeModal();
      this.toast('info','تم الرفض','أُعلّق حساب العميل.');
    },
    finApproveCredit(r){
      r.status='approved';
      r.managerNote=(this.creditNote||'').trim()||'اعتماد نهائي من المدير المالي.';
      this.syncLeadCredit(r,'approved','ready');
      this.syncClientAccount(r,'active');
      this.logEvent('المدير المالي','اعتماد نهائي وتفعيل حساب',r.ref+' · '+r.client,'العميل + المبيعات');
      this.notify('client','تم تفعيل حسابك', 'اعتمد المدير المالي ملفك الائتماني — يمكنك متابعة التعاقد.',{gotoPage:'dashboard'});
      this.notify('sales_rep','ملف معتمد ائتمانياً',r.client+' جاهز لعرض السعر.',{gotoPage:'salesSpec'});
      this.notify('fin_credit','تم الاعتماد النهائي',r.client,{gotoPage:'credit'});
      this.closeModal();
      this.toast('success','تم التفعيل','حساب العميل مفعّل وباب التسعير مفتوح للمبيعات.');
    },
    finRejectCredit(r){
      var note=(this.creditNote||'').trim();
      if(note.length<6){ this.toast('info','سبب مطلوب','اكتب سبب الرفض أو التعليق.'); return; }
      r.status='rejected'; r.managerNote=note; r.holdNote=note;
      this.syncLeadCredit(r,'rejected','neu');
      this.syncClientAccount(r,'suspended');
      this.logEvent('المدير المالي','رفض / تعليق حساب',r.ref+' · '+r.client,'العميل');
      this.notify('client','حسابك معلّق',note,{gotoPage:'profile'});
      this.notify('fin_credit','رفض نهائي من المدير المالي',r.client,{gotoPage:'credit'});
      this.notify('sales_rep','رفض نهائي ائتماني',r.client,{gotoPage:'salesSpec'});
      this.closeModal();
      this.toast('info','تم التعليق','حساب العميل معلّق.');
    },
    /* توافق مع السيناريوهات القديمة */
    approveLeadCredit(l,silent){
      var req=this.creditRequests.find(function(r){ return r.leadId===l.id || r.ref===l.ref; });
      if(!req){
        req=this.createCreditRequest({leadId:l.id,client:l.client,cr:l.cr,ref:l.ref,sector:l.sector,need:l.need,preset:'complete'});
      }
      this.creditMarkAllRequired(req);
      this.creditNote='اعتماد آلي عبر السيناريو';
      this.creditApproveAudit(req);
      var mgr=this.creditRequests.find(function(r){ return r.id===req.id; });
      if(mgr && mgr.status==='audit_ok') this.finApproveCredit(mgr);
      if(!silent) this.toast('success','اعتماد ائتماني',l.client);
    },
    rejectLeadCredit(l){
      var req=this.creditRequests.find(function(r){ return r.leadId===l.id || r.ref===l.ref; });
      if(!req) req=this.createCreditRequest({leadId:l.id,client:l.client,cr:l.cr,ref:l.ref,preset:'weak'});
      this.creditNote='رفض من واجهة الطابور السريع';
      this.creditReject(req);
    },
    approveCredit(){ /* أُزيل الاعتماد الجماعي — كل طلب على حدة */ this.toast('info','كل طلب على حدة','افتح تفاصيل الطلب من جدول الائتمان.'); },

    /* ---------- الإسكان ---------- */
    assignBed(room){
      var i=room.beds.findIndex(function(b){return !b}); if(i<0||!this.waiting.length) return;
      var name=this.waiting.shift(); room.beds[i]=name;
      this.logEvent('السكن','تخصيص سرير',name+' → '+room.name,'—');
      this.notify('as_am','تم تسكين عامل',name+' في '+room.name,{gotoPage:'am'});
      this.toast('success','تخصيص سرير',name+' → '+room.name);
    },
    freeBed(room,idx){ var name=room.beds[idx]; room.beds[idx]=null; this.waiting.push(name); this.logEvent('السكن','إخلاء سرير',name,'—'); this.toast('info','إخلاء سرير',name); },
    transfer(room){
      var i=room.beds.findIndex(function(b){return b}); if(i<0) return;
      var target=this.rooms.find(function(r){return r!==room && r.beds.some(function(b){return !b})});
      if(!target){ this.toast('info','لا توجد مساحة','لا سرير شاغر.'); return; }
      var name=room.beds[i]; room.beds[i]=null; var ti=target.beds.findIndex(function(b){return !b}); target.beds[ti]=name;
      this.logEvent('السكن','نقل عامل',name+' → '+target.name,'—');
      this.toast('success','نقل عامل',name+' → '+target.name);
    },

    /* ---------- سيناريوهات التشغيل السريع ---------- */
    runScenario(name){
      var self=this;
      if(name==='onboard'||name==='full'){
        var lead=this.registerNewClient({name:'شركة النخبة للخدمات',cr:'1010888777',need:'٢٠ عامل نظافة · ١٢ شهراً',sector:'خدمات'});
        this.switchRole('fin_credit');
        if(name==='onboard'){ this.toast('success','سيناريو التسجيل','انتقل للائتمان لاعتماد الملف.'); if(name!=='full') return; }
      }
      if(name==='credit'||name==='full'){
        var req=this.creditOfficerQueue[0];
        if(!req){ this.registerNewClient({name:'شركة النخبة للخدمات',cr:'1010888777',need:'٢٠ عامل نظافة',sector:'خدمات'}); req=this.creditOfficerQueue[0]; }
        this.creditMarkAllRequired(req);
        this.creditApproveAudit(req);
        var mgr=this.creditMgrQueue[0];
        if(mgr) this.finApproveCredit(mgr);
        this.switchRole('sales_rep');
        if(name==='credit'){ this.toast('success','سيناريو الائتمان','دُقّقت المرفقات → المدير المالي → تفعيل الحساب.'); return; }
      }
      if(name==='quote'||name==='full'){
        var ready=this.salesLeads.find(function(l){ return l.credit==='approved'&&(l.stage==='ready'||l.stage==='neu'||l.stage==='quoted'); });
        if(!ready){ this.runScenario('credit'); ready=this.salesLeads.find(function(l){ return l.credit==='approved'; }); }
        if(ready && (!ready.quote || ready.quoteReview==='returned' || ready.stage==='ready' || ready.stage==='neu')){
          this.quoteForm={valid:'2026/09/08',discountPct:0,lines:[Object.assign(this.emptyQuoteLine(),{nat:'الفلبين',job:'عامل ضيافة',qty:40})]};
          this.submitQuote(ready);
        }
        if(ready && ready.quote && ready.quoteReview!=='approved'){
          this.actionNote='اعتماد تجريبي ضمن السقف — عرض MVP';
          if(ready.quoteReview==='pending_mgr' || (ready.quote.discountPct||0)>10){
            this.switchRole('sales_mgr');
            this.mgrFinalApproveQuote(ready);
          } else {
            this.switchRole('sales_sup');
            this.supApproveQuote(ready);
          }
        }
        this.switchRole('client'); this.page='dashboard';
        if(name==='quote'){ this.toast('success','سيناريو العرض','العرض عند العميل — اقبله من لوحة التحكم.'); return; }
      }
      if(name==='close'||name==='full'){
        var q=this.clientQuotes.find(function(x){ return x.status==='sent'; });
        if(q) this.acceptQuote(q);
        var l=this.salesLeads.find(function(x){ return x.stage==='nego'||x.stage==='quoted'; });
        if(l){
          this.switchRole('sales_rep');
          this.contractForm={no:'JE-2026-'+(320+this.contracts.length),date:'2026/08/09'};
          this.submitContract(l);
          this.handover(l);
          this.switchRole('as_am');
        }
        if(name==='close'){ this.toast('success','سيناريو الإغلاق','العقد سُلِّم للتشغيل.'); return; }
      }
      if(name==='ticket'||name==='full'){
        this.switchRole('client');
        this.ticketForm={type:'replacement',title:'طلب استبدال عامل — محاكاة',contract:this.contracts[0]?this.contracts[0].id:'JE-2024-118',workerId:'',site:'موقع العليا',priority:'عالية',description:'غياب متكرر لثلاثة أيام.',phone:'+966500000000'};
        this.submitTicket();
        this.switchRole('as_sup');
        if(name==='ticket') this.toast('success','سيناريو التذكرة','التذكرة وصلت للمتابعة بسبب الأولوية العالية.');
      }
      if(name==='full'){
        this.toast('success','اكتملت الدورة','عميل → مالية/ائتمان → مبيعات → تشغيل → ما بعد البيع. صناديق العمل جاهزة للردود.');
        this.showSimLog=true;
      }
    },

    /* ---------- العدّاد التنازلي ---------- */
    startCountdown(){ var self=this; var target=Date.now()+23*864e5+7*36e5+42*6e4; var pad=function(n){return String(n).padStart(2,'0');}; var tick=function(){ var diff=target-Date.now(); if(diff<0)diff=0; self.cd={d:pad(Math.floor(diff/864e5)),h:pad(Math.floor(diff%864e5/36e5)),m:pad(Math.floor(diff%36e5/6e4)),s:pad(Math.floor(diff%6e4/1e3))}; }; tick(); setInterval(tick,1000); }
  };
}