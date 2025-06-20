const questionsData = [
    // Question Pool - MCQs
    {
        id: 'qp-mcq-1',
        type: 'mcq-pool',
        text: '1. در یک نوسانگر جرم-فنر افقی بدون اصطکاک، در کدام نقطه انرژی پتانسیل کشسانی بیشینه است؟',
        options: [
            'الف) در نقطه تعادل',
            'ب) در نقاط بازگشتی (حداکثر جابه‌جایی)',
            'ج) در هر نقطه‌ای بین نقطه تعادل و نقاط بازگشتی',
            'د) در نقطه‌ای که سرعت نوسانگر نصف حداکثر سرعت است.'
        ],
        correctAnswer: 'b',
        bloomLevel: 'دانش (Knowledge)',
        explanation: 'انرژی پتانسیل کشسانی فنر ($$U_s = \\frac{1}{2}kx^2$$) به مربع جابه‌جایی فنر از نقطه تعادل (x) بستگی دارد. هرچه جابه‌جایی (x) بیشتر باشد، انرژی پتانسیل نیز بیشتر است. در نقاط بازگشتی، جابه‌جایی نوسانگر حداکثر است و برابر با دامنه نوسان (A) است (یعنی $$x = \\pm A$$). بنابراین، در این نقاط، فنر حداکثر کشیدگی یا فشردگی را دارد و انرژی پتانسیل کشسانی آن به بیشینه مقدار خود می‌رسد. در نقطه تعادل ($$x=0$$)، فنر نه کشیده و نه فشرده است، پس انرژی پتانسیل کشسانی صفر است.'
    },
    {
        id: 'qp-mcq-2',
        type: 'mcq-pool',
        text: '2. اگر دامنه نوسان یک نوسانگر هماهنگ ساده دو برابر شود، انرژی مکانیکی آن چند برابر می‌شود؟',
        options: [
            'الف) ۲ برابر',
            'ب) ۴ برابر',
            'ج) $\\sqrt{2}$ برابر',
            'د) تغییری نمی‌کند.'
        ],
        correctAnswer: 'b',
        bloomLevel: 'کاربرد (Application)',
        explanation: 'انرژی مکانیکی کل یک نوسانگر هماهنگ ساده ایده‌آل (بدون اصطکاک) از رابطه $$E = \\frac{1}{2}kA^2$$ یا $$E = 2\\pi^2mA^2f^2$$ به دست می‌آید. در هر دو رابطه، انرژی مکانیکی (E) مستقیماً با مربع دامنه نوسان ($$A^2$$) متناسب است. اگر دامنه نوسان (A) دو برابر شود، یعنی به $$2A$$ تبدیل شود، آنگاه مربع دامنه به $$(2A)^2 = 4A^2$$ تبدیل خواهد شد. در نتیجه، انرژی مکانیکی نوسانگر ۴ برابر مقدار اولیه خود می‌شود. این نشان می‌دهد که افزایش دامنه تأثیر چشمگیری بر انرژی ذخیره شده در سیستم دارد.'
    },
    {
        id: 'qp-mcq-3',
        type: 'mcq-pool',
        text: '3. در یک نوسانگر هماهنگ ساده، در لحظه‌ای که انرژی جنبشی و انرژی پتانسیل با هم برابرند، سرعت نوسانگر در مقایسه با سرعت حداکثر آن چگونه است؟',
        options: [
            'الف) برابر با سرعت حداکثر',
            'ب) نصف سرعت حداکثر',
            'ج) $\\frac{1}{\\sqrt{2}}$ برابر سرعت حداکثر',
            'د) صفر'
        ],
        correctAnswer: 'c',
        bloomLevel: 'تحلیل (Analysis)',
        explanation: 'در یک نوسانگر هماهنگ ساده، انرژی مکانیکی کل (E) ثابت است و برابر با مجموع انرژی جنبشی (K) و انرژی پتانسیل (U) است: $$E = K + U$$. همچنین، می‌دانیم که $$E = K_{max}$$ (انرژی جنبشی حداکثر در نقطه تعادل) و $$E = U_{max}$$ (انرژی پتانسیل حداکثر در نقاط بازگشتی). اگر $$K = U$$ باشد، آنگاه $$E = K + K = 2K$$. پس $$K = E/2$$. از طرفی، $$K = \\frac{1}{2}mv^2$$ و $$K_{max} = \\frac{1}{2}mv_{max}^2$$. بنابراین، $$\\frac{1}{2}mv^2 = \\frac{1}{2} (\\frac{1}{2}mv_{max}^2) \\Rightarrow v^2 = \\frac{1}{2}v_{max}^2 \\Rightarrow v = \\frac{1}{\\sqrt{2}}v_{max}$$. این نقطه در جابه‌جایی $$x = \\pm A/\\sqrt{2}$$ رخ می‌دهد.'
    },
    {
        id: 'qp-mcq-4',
        type: 'mcq-pool',
        text: '4. کدام یک از گزینه‌های زیر در مورد نوسانات میرا صحیح است؟',
        options: [
            'الف) در نوسانات میرا، انرژی مکانیکی سیستم پایسته می‌ماند.',
            'ب) نوسانات میرا تنها در حضور نیروهای پایستار رخ می‌دهند.',
            'ج) در نوسانات میرا، دامنه نوسان به مرور زمان کاهش می‌یابد.',
            'د) نوسانات میرا تنها در خلاء اتفاق می‌افتند.'
        ],
        correctAnswer: 'c',
        bloomLevel: 'فهم (Comprehension)',
        explanation: 'نوسانات میرا (Damped Oscillations) به نوساناتی گفته می‌شود که در آن‌ها دامنه نوسان به مرور زمان به دلیل وجود نیروهای اتلافی (مانند اصطکاک یا مقاومت هوا) کاهش می‌یابد. این نیروها، انرژی مکانیکی سیستم را به اشکال دیگری از انرژی (معمولاً گرما) تبدیل می‌کنند، بنابراین انرژی مکانیکی سیستم پایسته نمی‌ماند. گزینه‌های الف و ب نادرست هستند زیرا نیروهای پایستار (مانند نیروی فنر یا گرانش) باعث نوسان می‌شوند، اما نیروهای اتلافی (غیرپایستار) هستند که موجب میرا شدن می‌شوند. گزینه د نیز نادرست است؛ نوسانات میرا در هر محیطی که مقاومت یا اصطکاک وجود داشته باشد، رخ می‌دهند.'
    },
    {
        id: 'qp-mcq-5',
        type: 'mcq-pool',
        text: '5. یک آونگ ساده با طول L و جرم m در حال نوسان است. کدام یک از تغییرات زیر باعث افزایش انرژی مکانیکی آونگ می‌شود؟',
        options: [
            'الف) افزایش طول آونگ',
            'ب) کاهش جرم آونگ',
            'ج) افزایش دامنه نوسان',
            'د) کاهش شتاب گرانش'
        ],
        correctAnswer: 'c',
        bloomLevel: 'کاربرد (Application)',
        explanation: 'انرژی مکانیکی یک آونگ ساده (در غیاب اصطکاک) به حداکثر ارتفاعی که آونگ از پایین‌ترین نقطه خود می‌رسد، بستگی دارد. این حداکثر ارتفاع به نوبه خود به دامنه زاویه‌ای یا دامنه جابه‌جایی خطی آونگ بستگی دارد. رابطه انرژی مکانیکی برای آونگ ساده (با فرض دامنه کوچک) نیز می‌تواند به صورت $$E = \\frac{1}{2}m\\omega^2A^2$$ بیان شود که در آن A دامنه جابه‌جایی خطی است. افزایش دامنه نوسان (چه زاویه‌ای و چه خطی) به معنای افزایش حداکثر انرژی پتانسیل گرانشی ذخیره شده در آونگ است، و در نتیجه انرژی مکانیکی کل سیستم افزایش می‌یابد. تغییر طول، جرم یا شتاب گرانش به طور مستقیم انرژی مکانیکی را تغییر نمی‌دهد، مگر اینکه دامنه نوسان نیز به تناسب تغییر کند. اما افزایش مستقیم دامنه، به طور قطع انرژی مکانیکی را افزایش می‌دهد.'
    },

    // Question Pool - Essays
    {
        id: 'qp-essay-1',
        type: 'essay-pool',
        text: '1. اصل پایستگی انرژی مکانیکی را در یک نوسانگر جرم-فنر بدون اصطکاک توضیح دهید.',
        bloomLevel: 'فهم (Comprehension)',
        explanation: 'در یک نوسانگر جرم-فنر افقی ایده‌آل، یعنی سیستمی که هیچ نیروی اتلافی (مانند اصطکاک بین جرم و سطح یا مقاومت هوا) بر آن وارد نمی‌شود، اصل پایستگی انرژی مکانیکی برقرار است. این اصل بیان می‌کند که مجموع انرژی جنبشی (K) و انرژی پتانسیل کشسانی (U) سیستم در هر لحظه از زمان ثابت و برابر با یک مقدار ثابت E است: $$E = K + U = \\text{ثابت}$$. این بدان معناست که انرژی در سیستم از بین نمی‌رود و تولید هم نمی‌شود، بلکه به طور مداوم بین دو شکل انرژی (جنبشی و پتانسیل) تبدیل می‌شود. در نقاط بازگشتی (حداکثر جابه‌جایی، $$x=\\pm A$$)، جرم برای لحظه‌ای متوقف می‌شود تا جهت حرکت خود را تغییر دهد. در این لحظه، سرعت جرم صفر است، بنابراین انرژی جنبشی آن ($$K = \\frac{1}{2}mv^2$$) نیز صفر است. فنر در حداکثر کشیدگی یا فشردگی خود قرار دارد، بنابراین تمام انرژی مکانیکی سیستم به صورت انرژی پتانسیل کشسانی ($$U = \\frac{1}{2}kA^2$$) ذخیره شده است. در نقطه تعادل ($$x=0$$)، جرم با حداکثر سرعت خود از این نقطه عبور می‌کند. در این نقطه، فنر نه کشیده و نه فشرده است، بنابراین انرژی پتانسیل کشسانی آن صفر است. تمام انرژی مکانیکی سیستم به صورت انرژی جنبشی ($$K = \\frac{1}{2}mv_{max}^2$$) ظاهر می‌شود. در نقاط میانی، هم انرژی جنبشی و هم انرژی پتانسیل وجود دارد. با حرکت جرم از نقطه تعادل به سمت نقطه بازگشتی، انرژی جنبشی کاهش یافته و به انرژی پتانسیل تبدیل می‌شود. برعکس، با حرکت از نقطه بازگشتی به سمت نقطه تعادل، انرژی پتانسیل کاهش یافته و به انرژی جنبشی تبدیل می‌شود. این تبدیل انرژی به صورت پیوسته و بدون اتلاف صورت می‌گیرد و انرژی مکانیکی کل سیستم همواره ثابت باقی می‌ماند. این پایستگی انرژی، رفتار ریتمیک و دوره‌ای نوسانگر هماهنگ ساده را تضمین می‌کند.'
    },
    {
        id: 'qp-essay-2',
        type: 'essay-pool',
        text: '2. یک جسم به جرم $0.5 \\, \\text{kg}$ به فنری با ثابت فنر $200 \\, \\text{N/m}$ متصل است و روی سطح افقی بدون اصطکاک نوسان می‌کند. اگر دامنه نوسان $10 \\, \\text{cm}$ باشد، الف) انرژی مکانیکی نوسانگر را محاسبه کنید. ب) حداکثر سرعت نوسانگر را بیابید. ج) در نقطه‌ای که جابه‌جایی نوسانگر $5 \\, \\text{cm}$ است، انرژی پتانسیل کشسانی و انرژی جنبشی آن را محاسبه کنید.',
        bloomLevel: 'کاربرد (Application)',
        explanation: '**داده‌ها:** <ul><li>جرم ($$m$$) = $$0.5 \\, \\text{kg}$$</li><li>ثابت فنر ($$k$$) = $$200 \\, \\text{N/m}$$</li><li>دامنه نوسان ($$A$$) = $$10 \\, \\text{cm} = 0.1 \\, \\text{m}$$</li></ul> **الف) محاسبه انرژی مکانیکی نوسانگر:**<br>انرژی مکانیکی کل یک نوسانگر هماهنگ ساده ایده‌آل از رابطه $$E = \\frac{1}{2}kA^2$$ به دست می‌آید.<br>$$E = \\frac{1}{2} \\times (200 \\, \\text{N/m}) \\times (0.1 \\, \\text{m})^2 = 1 \\, \\text{J}$$<br>بنابراین، انرژی مکانیکی نوسانگر $$1 \\, \\text{Joule}$$ است.<br>**ب) یافتن حداکثر سرعت نوسانگر:**<br>حداکثر سرعت نوسانگر در نقطه تعادل (جایی که $$x=0$$) رخ می‌دهد. در این نقطه، تمام انرژی مکانیکی به انرژی جنبشی تبدیل شده است. بنابراین، $$E = K_{max} = \\frac{1}{2}mv_{max}^2$$.<br>$$1 \\, \\text{J} = \\frac{1}{2} \\times (0.5 \\, \\text{kg}) \\times v_{max}^2 \\Rightarrow v_{max}^2 = 4 \\Rightarrow v_{max} = 2 \\, \\text{m/s}$$<br>حداکثر سرعت نوسانگر $$2 \\, \\text{m/s}$$ است.<br>**ج) محاسبه انرژی پتانسیل کشسانی و انرژی جنبشی در جابه‌جایی $$5 \\, \\text{cm}$$:**<br>جابه‌جایی: $$x = 5 \\, \\text{cm} = 0.05 \\, \\text{m}$$.<br>انرژی پتانسیل کشسانی: $$U_s = \\frac{1}{2}kx^2 = \\frac{1}{2} \\times (200 \\, \\text{N/m}) \\times (0.05 \\, \\text{m})^2 = 0.25 \\, \\text{J}$$.<br>انرژی جنبشی (از اصل پایستگی انرژی مکانیکی): $$K = E - U_s = 1 \\, \\text{J} - 0.25 \\, \\text{J} = 0.75 \\, \\text{J}$$.<br>بنابراین، در جابه‌جایی $$5 \\, \\text{cm}$$، انرژی پتانسیل کشسانی $$0.25 \\, \\text{J}$$ و انرژی جنبشی $$0.75 \\, \\text{J}$$ است.'
    },
    {
        id: 'qp-essay-3',
        type: 'essay-pool',
        text: '3. با توجه به مفهوم تبدیل انرژی در نوسانگر هماهنگ ساده، توضیح دهید چرا سرعت نوسانگر در نقاط بازگشتی صفر و در نقطه تعادل بیشینه است.',
        bloomLevel: 'تحلیل (Analysis)',
        explanation: 'در یک نوسانگر هماهنگ ساده ایده‌آل، انرژی مکانیکی کل (E) که شامل مجموع انرژی جنبشی (K) و انرژی پتانسیل (U) است، همواره ثابت باقی می‌ماند. این ثابت بودن انرژی، اساس تبدیل انرژی بین دو شکل جنبشی و پتانسیل را توضیح می‌دهد. در نقاط بازگشتی (حداکثر جابه‌جایی از نقطه تعادل)، نوسانگر به حداکثر دامنه خود (A) می‌رسد. فنر در حداکثر کشیدگی یا فشردگی است، بنابراین انرژی پتانسیل کشسانی آن بیشینه است. برای اینکه نوسانگر بتواند جهت حرکت خود را معکوس کند، باید برای یک لحظه کوتاه متوقف شود. لذا، سرعت آن در این نقاط صفر است و در نتیجه انرژی جنبشی آن نیز صفر می‌شود. در نقطه تعادل (جایی که جابه‌جایی صفر است)، فنر نه کشیده و نه فشرده است، بنابراین انرژی پتانسیل کشسانی آن صفر است (یا در حداقل مقدار خود قرار دارد). طبق اصل پایستگی انرژی مکانیکی، اگر انرژی پتانسیل صفر باشد، تمام انرژی مکانیکی سیستم باید به انرژی جنبشی تبدیل شده باشد. از آنجایی که انرژی جنبشی در این نقطه به حداکثر مقدار خود می‌رسد، سرعت نوسانگر نیز در نقطه تعادل بیشینه خواهد بود. این حداکثر سرعت به نوسانگر اینرسی لازم را می‌دهد تا از نقطه تعادل عبور کرده و به سمت نقطه بازگشتی دیگر حرکت کند و فنر را فشرده یا کشیده کند.'
    },
    {
        id: 'qp-essay-4',
        type: 'essay-pool',
        text: '4. پدیده "نوسانات میرا" را تعریف کرده و دو عامل فیزیکی که باعث میرا شدن نوسانات می‌شوند را نام ببرید. سپس توضیح دهید که چگونه این عوامل بر انرژی مکانیکی نوسانگر تأثیر می‌گذارند.',
        bloomLevel: 'فهم (Comprehension) و تحلیل (Analysis)',
        explanation: '**تعریف نوسانات میرا:** نوسانات میرا (Damped Oscillations) به نوساناتی گفته می‌شود که در آن‌ها دامنه نوسان به مرور زمان و به تدریج کاهش می‌یابد تا نهایتاً نوسان متوقف شود. این کاهش دامنه ناشی از تبدیل انرژی مکانیکی سیستم به اشکال دیگر انرژی، عمدتاً انرژی گرمایی، به دلیل وجود نیروهای اتلافی است. برخلاف نوسانگر هماهنگ ساده ایده‌آل که انرژی مکانیکی آن پایسته است، در نوسانات میرا، انرژی مکانیکی سیستم در طول زمان کاهش می‌یابد.<br>**دو عامل فیزیکی که باعث میرا شدن نوسانات می‌شوند:**<br>1. **اصطکاک (Friction):** این نیرو بین سطح متحرک نوسانگر و سطحی که روی آن حرکت می‌کند (مثلاً بین جرم و سطح افقی در نوسانگر جرم-فنر) وجود دارد. اصطکاک همواره در خلاف جهت حرکت عمل می‌کند و کار منفی انجام می‌دهد.<br>2. **مقاومت هوا یا سیال (Air/Fluid Resistance):** این نیرو بر جسم متحرک در داخل یک سیال (مانند هوا یا آب) وارد می‌شود و همواره در خلاف جهت حرکت جسم است. مقاومت هوا با سرعت جسم متناسب است و با افزایش سرعت، افزایش می‌یابد.<br>**تأثیر این عوامل بر انرژی مکانیکی نوسانگر:** هر دو عامل اصطکاک و مقاومت سیال، نیروهای غیرپایستار هستند. این نیروها بر خلاف جهت جابه‌جایی نوسانگر عمل می‌کنند و بنابراین، کار منفی بر روی سیستم انجام می‌دهند. کار منفی انجام شده توسط این نیروها باعث می‌شود که انرژی مکانیکی سیستم به تدریج به انرژی گرمایی (و مقداری انرژی صوتی) تبدیل شود. با هر نوسان، بخشی از انرژی مکانیکی به گرما تبدیل می‌شود. این اتلاف انرژی باعث می‌شود که حداکثر انرژی پتانسیل (که به دامنه بستگی دارد) و حداکثر انرژی جنبشی (که به دامنه و سرعت حداکثر بستگی دارد) در هر چرخه کاهش یابد. در نتیجه، دامنه نوسان به تدریج کوچک‌تر می‌شود تا جایی که نوسانگر نهایتاً در نقطه تعادل خود متوقف شود. به دلیل تبدیل انرژی مکانیکی به انرژی گرمایی، اصل پایستگی انرژی مکانیکی در نوسانات میرا برقرار نیست. با این حال، اصل پایستگی انرژی کل (شامل انرژی گرمایی) همچنان برقرار است.'
    },
    {
        id: 'qp-essay-5',
        type: 'essay-pool',
        text: '5. یک نوسانگر هماهنگ ساده داریم. اگر جرم نوسانگر را ثابت نگه داریم و بسامد نوسان را دو برابر کنیم، انرژی مکانیکی نوسانگر چگونه تغییر می‌کند؟ توضیح دهید.',
        bloomLevel: 'تحلیل (Analysis)',
        explanation: 'انرژی مکانیکی یک نوسانگر هماهنگ ساده ایده‌آل از رابطه $$E = 2\\pi^2mA^2f^2$$ به دست می‌آید. این رابطه نشان می‌دهد که انرژی مکانیکی (E) به جرم (m)، دامنه نوسان (A) و بسامد (f) بستگی دارد. در این سوال، فرض شده است که جرم (m) و دامنه نوسان (A) ثابت نگه داشته می‌شوند و بسامد نوسان (f) دو برابر می‌شود، یعنی $$f_{new} = 2f_{old}$$.<br>با جایگذاری $$f_{new} = 2f_{old}$$ در رابطه انرژی مکانیکی، داریم:<br>$$E_{new} = 2\\pi^2m A^2 (f_{new})^2 = 2\\pi^2m A^2 (2f_{old})^2 = 2\\pi^2m A^2 (4f_{old}^2) = 4 \\times (2\\pi^2m A^2 f_{old}^2) = 4 \\times E_{old}$$<br>**نتیجه‌گیری:** اگر جرم و دامنه نوسان ثابت نگه داشته شوند و بسامد نوسان دو برابر شود، انرژی مکانیکی نوسانگر **چهار برابر** خواهد شد. افزایش بسامد به معنای ارتعاشات سریع‌تر است. برای اینکه نوسانگر با همان دامنه اما بسامد دو برابر نوسان کند، باید سرعت‌های لحظه‌ای آن، به خصوص سرعت حداکثر در نقطه تعادل، به طور قابل توجهی افزایش یابد. از آنجایی که انرژی جنبشی با مربع سرعت متناسب است ($$K = \\frac{1}{2}mv^2$$) و انرژی مکانیکی کل نیز در نهایت با حداکثر انرژی جنبشی متناسب است، افزایش سرعت‌ها منجر به افزایش چشمگیر انرژی مکانیکی می‌شود. به طور دقیق‌تر، حداکثر سرعت نوسانگر هماهنگ ساده از رابطه $$v_{max} = A\\omega = A(2\\pi f)$$ به دست می‌آید. اگر f دو برابر شود، $$v_{max}$$ نیز دو برابر می‌شود. سپس، $$K_{max} = \\frac{1}{2}mv_{max}^2 = \\frac{1}{2}m(2v_{max,old})^2 = 4 \\times (\\frac{1}{2}mv_{max,old}^2) = 4K_{max,old}$$. از آنجایی که انرژی مکانیکی کل برابر با $$K_{max}$$ است، انرژی مکانیکی نیز چهار برابر می‌شود. این نشان می‌دهد که بسامد و دامنه هر دو نقش حیاتی در تعیین انرژی یک نوسانگر ایفا می‌کنند.'
    },

    // Test Questions - MCQs
    {
        id: 'test-mcq-1',
        type: 'mcq-test',
        text: '1. در یک نوسانگر جرم-فنر افقی بدون اصطکاک، در کدام نقطه انرژی پتانسیل کشسانی بیشینه است؟',
        options: [
            'الف) در نقطه تعادل',
            'ب) در نقاط بازگشتی (حداکثر جابه‌جایی)',
            'ج) در هر نقطه‌ای بین نقطه تعادل و نقاط بازگشتی',
            'د) در نقطه‌ای که سرعت نوسانگر نصف حداکثر سرعت است.'
        ],
        correctAnswer: 'b',
        bloomLevel: 'دانش',
        points: 1
    },
    {
        id: 'test-mcq-2',
        type: 'mcq-test',
        text: '2. اگر دامنه نوسان یک نوسانگر هماهنگ ساده دو برابر شود، انرژی مکانیکی آن چند برابر می‌شود؟',
        options: [
            'الف) ۲ برابر',
            'ب) ۴ برابر',
            'ج) $\\sqrt{2}$ برابر',
            'د) تغییری نمی‌کند.'
        ],
        correctAnswer: 'b',
        bloomLevel: 'کاربرد',
        points: 1
    },
    {
        id: 'test-mcq-3',
        type: 'mcq-test',
        text: '3. کدام یک از گزینه‌های زیر در مورد نوسانات میرا صحیح است؟',
        options: [
            'الف) در نوسانات میرا، انرژی مکانیکی سیستم پایسته می‌ماند.',
            'ب) نوسانات میرا تنها در حضور نیروهای پایستار رخ می‌دهند.',
            'ج) در نوسانات میرا، دامنه نوسان به مرور زمان کاهش می‌یابد.',
            'د) نوسانات میرا تنها در خلاء اتفاق می‌افتند.'
        ],
        correctAnswer: 'c',
        bloomLevel: 'فهم',
        points: 1
    },
    {
        id: 'test-mcq-4',
        type: 'mcq-test',
        text: '4. یک آونگ ساده با طول L و جرم m در حال نوسان است. کدام یک از تغییرات زیر باعث افزایش انرژی مکانیکی آونگ می‌شود؟',
        options: [
            'الف) افزایش طول آونگ',
            'ب) کاهش جرم آونگ',
            'ج) افزایش دامنه نوسان',
            'د) کاهش شتاب گرانش'
        ],
        correctAnswer: 'c',
        bloomLevel: 'کاربرد',
        points: 1
    },

    // Test Questions - Essays
    {
        id: 'test-essay-1',
        type: 'essay-test',
        text: '1. اصل پایستگی انرژی مکانیکی را در یک نوسانگر جرم-فنر بدون اصطکاک توضیح دهید. (۴ نمره)',
        bloomLevel: 'فهم',
        points: 4
    },
    {
        id: 'test-essay-2',
        type: 'essay-test',
        text: '2. یک جسم به جرم $0.5 \\, \\text{kg}$ به فنری با ثابت فنر $200 \\, \\text{N/m}$ متصل است و روی سطح افقی بدون اصطکاک نوسان می‌کند. اگر دامنه نوسان $10 \\, \\text{cm}$ باشد، الف) انرژی مکانیکی نوسانگر را محاسبه کنید. (۴ نمره) ب) حداکثر سرعت نوسانگر را بیابید. (۴ نمره)',
        bloomLevel: 'کاربرد',
        points: 8 // 4 for part a, 4 for part b
    },
    {
        id: 'test-essay-3',
        type: 'essay-test',
        text: '3. با توجه به مفهوم تبدیل انرژی در نوسانگر هماهنگ ساده، توضیح دهید چرا سرعت نوسانگر در نقاط بازگشتی صفر و در نقطه تعادل بیشینه است. (۴ نمره)',
        bloomLevel: 'تحلیل',
        points: 4
    }
];
