import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      "upper-head": "discount on Saturdays and Sundays",
      search: "Search...",
      home: "Home",
      about: "About Us",
      contact: "Contact",
      faq: "FAQ",
      more: "More Information",
      by: "by",
      cat: "Category",
      all: "All",
      lang: "Language",
      afromz: "A from Z",
      zfroma: "Z from A",
      h1: "Discover Kids Book",
      not: "Book not found",
      prag: "Welcome to Narnia Bookstore! Established in 2020, we are a  passionate team dedicated to bringing the magic of reading to every book lover.At Narnia, we offer a carefully curated selection of books from a wide range of genres, ensuring that there's something for everyone.Since our founding, we have built strong partnerships with renowned publishers and companies,allowing us to provide the latest bestsellers, timeless classics,and hidden gems.Whether you're an avid reader or just starting your journey,Narnia Bookstore is your ultimate destination for all things literature.",
      since:
        "Since 2020, we've raised more than 35 million for independent bookstores.",
      what: "What are we selling?",
      parg2:
        "At Narnia Bookstore, we pride ourselves on offering a diverse selection of books for all tastes. Whether you’re seeking the thrill of a gripping thriller, the mystery of a detective novel, the emotional depth of a drama, or the enchanting adventures of fantasy, we have something to spark your imagination. Our collection also includes a wide variety of children's books, designed to inspire young readers and nurture their love for stories",
      col: "Our Collaborations:",
      amazon:
        "By partnering with Amazon Kindle, we are stepping into the world of digital books. Our website aims to provide book lovers with an easy and fast reading experience with vast collection of books.",
      faber:
        "Faber-Castell and our platform proudly collaborate to bring high-quality stationery products to our customers.",
      apple:
        " Our collaboration with Apple Books brings a new dimension to reading by combining technology and literature. Together, we aim to provide readers with seamless access  to a vast collection of digital books",
      barnes:
        "Partnering with Barnes & Noble will allow us to offer an extensive collection of digital books to our customers.With Google Books’ vast library and easy accessibility",
      faq2: "You can read ebooks from Narnia.com on our dedicated mobile app by first logging in, then tapping the library icon in the menu bar at the bottom of the screen. From there you can tap on an ebook to start reading.",
      faq3: " Ebooks from Narnia.commust be read on either our  Apple or Android app, or via a web browser, with the exception of DRM-free titles that can be downloaded and transferred to your reader app or device of choice.",
      faq32:"Users of Android based e ink devices, that have regular access to the Google Play app store (Boox, Meebook, etc), should be able to download and read from our Android app. Mileage may vary depending on the device.",
      faq4:" Both Apple and Google require app developers who use in-app purchasing  to pay around 30% of their earnings from those purchases in fees. We want that money to be used to support local bookstores instead, so this extra step is required.",
      faq5:"To find ebooks on our website, use our search filters to display  ebooks only, or visit our dedicated ebooks page to shop from one of  the featured book lists.  In the app To find ebooks on our website, use  our search filters to display ebooks only, or visit our dedicated  ebooks page to shop from one of the featured book lists",
      faq6:" Yes, purchasing ebooks requires an active account. Any purchased  ebooks will appear in that account’s My Ebook Library, accessible via the website or in the Android or Apple apps",
      web: "Using a web browser",
      parg3:
        "You can read ebooks from Narnia.comon a web browser by  loggingin to your Narnia.com account and navigating to My Ebook Library via the main account menu. From there, click on an ebook to start reading.",
      top: "Top Question",
      contact: "Contact Us",
      phone: "Phone",
      name: "Name",
      message: "Message",
      send: "Send",
      Account: "Account",
      Wishlist: "Wishlist",
      Privacy: "Privacy",
      Help: "Help",
      Logout: "Log out",
      AccountSetting: "Account Setting",
      password: "Password",
      empty: "Your wishlist is empty",
      back: "Back To Home",
      PrivacySection: "Privacy Section",
      parg5:
        "<b>Privacy Policy</b>  At Narnia, we value your privacy   and are committed to protecting your personal information. This   policy explains how we collect, use, and safeguard your data  when you visit our website.  Information We Collect  When you browse our website or make a purchase, we may collect   certain information, including: Your name, email address, and  contact details Shipping and billing addresses Payment details  (processed securely through third-party payment gateways)  Purchase history and preferences IP address and browsing  behavior for website analytics   <b>How We Use Your Information </b>   We use your data to: Process and fulfill your orders  Provide customer support and respond to inquiries Improve our  website, services, and product offerings Send promotional emails  (only if you subscribe) Prevent fraud and ensure website  security   <b> Data Protection & Security </b>   We take appropriate security measures to protect your  personal data from unauthorized access, alteration, or  disclosure. Our website uses encryption and secure payment  methods to safeguard your sensitive information.   <b>Your Rights</b>   You have the right to: Access, update, or delete your  personal information Opt out of marketing emails at any time  Request information about how we process your data For any  questions or requests regarding your privacy, please contact usBy using our website,  you agree to our privacy policy. We may update this policy  periodically, so we encourage you to review it regularly.",
      WishlistSection: "Wishlist Section",
      author: "Authors",
      HelpCenter: "Help Center",
      parg6:
        "Placing an order is very easy! Simply add your favorite books to  the cart and proceed to checkout. Once your payment is completed,  your order will be processed and shipped shortly. You can track  your orders by logging into your account or using your tracking  number to check the shipping status. Delivery times may vary  depending on your location. You can visit our Shipping & Delivery  section to learn more about the courier services we work with and  the estimated delivery times. Shipping fees are determined based  on your total order amount and delivery address. If you experience  any issues with the books you ordered, you may return or exchange  them under certain conditions. For more details about the return  process and exchange policies, please visit our Returns &  Exchanges page. You can shop without creating an account, but  signing up allows you to track your orders more easily and receive  exclusive promotions. If you forget your password while logging  in, you can reset it using the password recovery link. If you  encounter any technical issues with our website or need assistance  with anything else, feel free to contact us through our Contact  page or live chat support. You can also shop easily and securely  using your mobile device.",
        create:"Create account",
        full:"Fullname",
        sign:"or sign up with",
        have:"Have an account?",
        login:"Log In",
        or:"or login with",
        havent:"Haven't an account?",
        edit:"Edit Book's",
        bookName:"Book's Name:",
        link:"Book's Image Url:",
        author:"Book's Author:",
        pages:"Book's Pages:",
        desc:"Book's Description:",
        cat:"Book's Category:",
        price:"Book's Price",
        lang2:"Book's Language:",
        dashboard:"Go to dashboard",
        delete:"Delete",
        addbook:"Add Book",
    },
  },
  az: {
    translation: {
      "upper-head": "Şənbə və Bazar günləri endirim",
      cat:"Kitabın Kategoriyası",
      addbook:"Kitab Əlavə Et",
      delete:"Sil",
      dashboard:"Dashboarda get",
      lang2:"Kitabin Dili",
      price:"Kitabin Qiyməti",
      search: "Axtar...",
      link:"Kitab şəklinin linki",
      desc:"Kitab Haqda",
      pages:"Kitabın səhifələri",
      bookName:"Kitabın Adı",
      author:"Kitabın Müəllifi",
      edit:"Kitabları redaktə edin",
      havent:"Hesabin yoxdur?",
      or:"və ya aşağıdakılar ilə daxil olun",
      login:"Daxil ol",
      have:"Hesabın var?",
      sign:"Və ya aşağıdakılar ilə daxil olun",
      full:"Tam ad",
      create:"Hesab yaradın",
      home: "Əsas Səhifə",
      about: "Haqqımızda",
      contact: "Əlaqə",
      faq: "S&C",
      more: "Daha Çox",
      by: "yazar",
      cat: "Kategoriya",
      all: " Bütün",
      lang: "Dil",
      afromz: "A-dan Z-ə",
      zfroma: "Z-dən A-a",
      h1: "Uşaq Kitabını Kəşf et",
      not: "Kitab tapilmadi",
      prag: "Narnia Kitab Mağazasına xoş gəlmisiniz!2020-ci ildə qurulmuş, oxu sehrini hər bir kitabsevərə çatdırmaq üçün çalışan ehtiraslı bir komandayıq. Narnia-da müxtəlif janrlardan diqqətlə seçilmiş kitab kolleksiyası təqdim edirik, beləliklə hər kəs üçün uyğun bir kitab tapmaq mümkündür.Fəaliyyətə başladığımız gündən etibarən tanınmış nəşriyyatlar və şirkətlərlə möhkəm tərəfdaşlıqlar qurmuşuq. Bu, bizə ən son bestsellerləri, unudulmaz klassikləri və kəşf edilməmiş inciləri sizə təqdim etməyə imkan verir.İstər həvəsli bir oxucu, istərsə də oxu səyahətinizə yeni başlayan biri olun, Narnia Kitab Mağazası ədəbiyyat dünyasına açılan qapınızdır",
      since:
        "2020-ci ildən bəri müstəqil kitab mağazaları üçün 35 million topladıq.",
      what: "Biz nə satırıq?",
      parg2:
        "Narnia Kitab Mağazasında hər zövqə uyğun müxtəlif kitablar təklif etməklə fəxr edirik. İstər cəlbedici bir trillerin həyəcanını, istər detektiv romanının sirrini, istərsə də dramın emosional dərinliyini və ya fantastikanın sehrli macəralarını axtarırsınızsa, təsəvvürünüzü oyandıracaq bir şeyimiz var. Kolleksiyamızda həmçinin gənc oxucuları ruhlandırmaq və onların hekayələrə olan sevgisini inkişaf etdirmək məqsədilə nəzərdə tutulmuş geniş çeşiddə uşaq kitabları da mövcuddur.",
      col: "Bizim Əməkdaşlıqlarımız:",
      amazon:
        "Amazon Kindle ilə əməkdaşlıq edərək, rəqəmsal kitablar dünyasına addım atırıq. Veb saytımız, geniş kitab kolleksiyası ilə kitabsevərlərə asan və sürətli oxuma təcrübəsi təqdim etməyi hədəfləyir.",
      faber:
        "Faber-Castell və bizim platformamız müştərilərimizə yüksək keyfiyyətli ofis ləvazimatları təqdim etmək üçün fəxrlə əməkdaşlıq edir.",
      apple:
        "Apple Books ilə əməkdaşlığımız, texnologiya və ədəbiyyatı birləşdirərək oxumağa yeni bir ölçü qatır. Birlikdə, oxuculara rəqəmsal kitabların geniş kolleksiyasına problemsiz giriş imkanı təqdim etməyi hədəfləyirik.",
      barnes:
        "Barnes & Noble ilə əməkdaşlıq edərək müştərilərimizə geniş rəqəmsal kitab kolleksiyasını təqdim etməyə imkan əldə edəcəyik. Google Books-un böyük kitabxanası və asan erişilebilirliyi ilə",
      faq2: "Elektron kitabları Narnia.com saytından xüsusi mobil tətbiqimizdə oxuya bilərsiniz. Bunun üçün əvvəlcə giriş edin, sonra ekranın altındakı menyu çubuğunda kitabxana ikonuna toxunun. Buradan istədiyiniz elektron kitaba toxunaraq oxumağa başlaya bilərsiniz.",
      faq3: "Narnia.com saytından elektron kitablar oxunmalıdır. istisna olmaqla, Apple və ya Android proqramı və ya veb brauzer vasitəsilə Yüklənə və oxucunuza ötürülə bilən DRM-siz başlıqlar proqram və ya seçdiyiniz cihaz",
      faq4:"Həm Apple, həm də Google tətbiqdaxili alışdan istifadə edən proqram tərtibatçılarını tələb edir bu alışlardan qazanclarının təxminən 30%-ni rüsumlarla ödəmək. Biz o pulun əvəzinə yerli kitab mağazalarını dəstəkləmək üçün istifadə olunmasını istəyirik bu əlavə addım tələb olunur.",
      faq5:"Veb saytımızda elektron kitablar tapmaq üçün yalnız elektron kitabları göstərmək üçün axtarış filtrlərimizdən istifadə edin və ya xüsusi kitab siyahılarından birindən alış-veriş etmək üçün xüsusi elektron kitablar səhifəmizə daxil olun. Proqramda Veb saytımızda elektron kitabları tapmaq üçün yalnız elektron kitabları göstərmək üçün axtarış filtrlərimizdən istifadə edin və ya xüsusi kitab siyahılarından birindən alış-veriş etmək üçün xüsusi elektron kitablar səhifəmizə daxil olun.",
      faq6:"Bəli, elektron kitabların alınması aktiv hesab tələb edir. Alınmış hər hansı elektron kitablar həmin hesabın vebsayt vasitəsilə və ya Android və ya Apple proqramlarında əldə edilə bilən Elektron Kitab Kitabxanamda görünəcək.",
      web: "Web istifade etmekle",
      faq32:"Google Play proqram mağazasına (Boox, Meebook və s.) müntəzəm girişi olan Android əsaslı elektron mürəkkəb cihazlarının istifadəçiləri bizim Android proqramımızdan endirib oxuya bilməlidirlər. Yürüşü cihazdan asılı olaraq dəyişə bilər.",

      parg3:
        "Elektron kitabları Narnia.com saytında veb brauzer vasitəsilə oxuya bilərsiniz. Bunun üçün Narnia.com hesabınıza daxil olun və əsas hesab menyusundan sMənim ElektronKitabxanam bölməsinə keçin. Buradan istədiyiniz elektron kitaba klikləyərək oxumağa başlaya bilərsiniz.",
      top: "Əsas Suallar",
      contact: "Bizimlə Əlaqə",
      phone: "Telefon",
      name: "Ad",
      message: "Mesaj",
      send: "Gondermek",
      Account: "Hesab",
      Wishlist: "Bəyənilənlər",
      Privacy: "Gizlilik",
      Help: "Yardım",
      Logout: "Çıxış",
      AccountSetting: "Hesab Ayarları",
      password: "Şifrə",
      empty: "Bəyənilənlər Boşdur",
      back: "Evə qayit",
      PrivacySection: "Gizlilik Bölməsi",
      parg5:
        "Narnia olaraq, şəxsi məlumatlarınızı qiymətləndirir və qorumağa sadiqik. Bu siyasət, veb saytımızı ziyarət etdiyiniz zaman məlumatlarınızı necə topladığımızı, istifadə etdiyimizi və qoruduğumuzu izah edir.Topladığımız MəlumatlarVeb saytımızda gəzdiyiniz zaman və ya alış-veriş etdiyiniz zaman aşağıdakı məlumatları toplaya bilərik:Adınız, e-poçt ünvanınız və əlaqə məlumatlarınızGöndərmə və ödəniş ünvanlarınızÖdəniş məlumatları (üçüncü tərəf ödəniş qapıları vasitəsilə təhlükəsiz şəkildə işlənir)Alış tarixçəniz və üstünlüklərinizIP ünvanı və veb sayt analitikası üçün gəzinti davranışınız Məlumatlarınızı Necə İstifadə Edirik Məlumatlarınızı aşağıdakı məqsədlər üçün istifadə edirik:Sifarişlərinizi işləyib yerinə yetirmək Müştəri dəstəyi təmin etmək və suallara cavab vermək Veb saytımızı, xidmətlərimizi və məhsul təkliflərimizi yaxşılaşdırmaq Təşviqat e-poçtları göndərmək (yalnız abunə olduqda) Fırıldaqçılığı qarşısını almaq və sayt təhlükəsizliyini təmin etmək Məlumatların Qorunması və Təhlükəsizlik Şəxsi məlumatlarınızı icazəsiz giriş, dəyişiklik və ya açıqlamadan qorumaq üçün uyğun təhlükəsizlik tədbirləri görürük. Veb saytımız, məlumatlarınızı qorumaq üçün şifrələmə və təhlükəsiz ödəniş metodları istifadə edir. Sizin Hüquqlarınız Aşağıdakı hüquqlara sahibsiniz: Şəxsi məlumatlarınızı əldə etmək, yeniləmək və ya silmək İstənilən vaxt marketinq e-poçtlarından imtina etmək Məlumatlarınızı necə işlədiyimiz barədə məlumat tələb etmək Hər hansı bir sual və ya tələbiniz varsa, bizə müraciət edin.Veb saytımızdan istifadə edərək, gizlilik siyasətimizi qəbul edirsiniz. Bu siyasəti mütəmadi olaraq yeniləyə bilərik, buna görə də onu mütəmadi olaraq gözdən keçirməyinizi tövsiyə edirik.",
      WishlistSection: "Wishlist Section",
      author: "Yazarlar",
      HelpCenter: "Yardım mərkəzi",
      parg6:
        "Sifariş vermək çox asandır! Sadəcə sevdiyiniz kitabları səbətə əlavə edin və ödənişə keçin. Ödəniş tamamlandıqdan sonra sifarişiniz işlənəcək və tezliklə göndəriləcək. Sifarişlərinizi izləmək üçün hesabınıza daxil ola bilərsiniz və ya izləmə nömrəsindən istifadə edərək göndərilmə vəziyyətini yoxlaya bilərsiniz. Çatdırılma vaxtları yerləşdiyiniz yerdən asılı olaraq dəyişə bilər. Daha ətraflı məlumat üçün Göndərmə və Çatdırılma bölməmizə baxa bilərsiniz, burada işlədiyimiz kuryer xidmətləri və təxmini çatdırılma vaxtları barədə məlumat tapa bilərsiniz. Göndərmə haqqı, ümumi sifariş məbləği və çatdırılma ünvanınıza əsasən müəyyən edilir. Sifariş etdiyiniz kitablarla bağlı hər hansı bir problem yaşasanız, müəyyən şərtlərlə onları geri qaytara və ya dəyişdirə bilərsiniz. Qaytarma prosesi və dəyişdirmə siyasətləri haqqında daha ətraflı məlumat üçün Geri Qaytarma və Dəyişdirmə səhifəmizə daxil ola bilərsiniz. Hesab yaratmadan alış-veriş edə bilərsiniz, amma qeydiyyatdan keçmək sifarişlərinizi daha asan izləməyə və xüsusi promosyonlar almağa imkan verir. Şifrəni unutsanız, şifrə bərpa linki vasitəsilə onu sıfırlaya bilərsiniz. Veb saytımızla bağlı hər hansı bir texniki problem yaşasanız və ya başqa bir şeylə bağlı yardıma ehtiyacınız varsa, bizimlə Əlaqə səhifəmizdən və ya canlı dəstək chat-ı vasitəsilə əlaqə saxlaya bilərsiniz. Həmçinin, mobil cihazınızdan asan və təhlükəsiz şəkildə alış-veriş edə bilərsiniz",
    },
  },
};

const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(LanguageDetector) // Brauzer dilini avtomatik aşkar edir
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage, // Seçilmiş dili istifadə edir
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
