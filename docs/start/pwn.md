# Бинарные уязвимости
**Цель раздела** — изучить ключевые понятия в области бинарных уязвимостей в контексте этичного хакинга.

<div class="player-switch">
  <button class="tab-button active" onclick="showPlayerTab('meetup')">Встреча</button>
  <button class="tab-button" onclick="showPlayerTab('slides')">Презентация</button>
</div>

<div id="meetup-tab" class="tab-content" style="display: block;">
	<div class="media-container">
		<iframe src="https://rutube.ru/play/embed/15d877d91f712ccbbb55fb7d686c9d0a/?skinColor=4051b5" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen>
		</iframe>
	</div>
</div>

<div id="slides-tab" class="tab-content" style="display: none;">
	<div class="media-container">
		<iframe src="https://docs.google.com/presentation/d/1iVAT6o7mR1GzTWWtuclr6Ilv0bMm1U07/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen>
		</iframe>
	</div>
</div>

<script>
  function showPlayerTab(tab) {
    document.getElementById("meetup-tab").style.display = (tab === "meetup") ? "block" : "none";
    document.getElementById("slides-tab").style.display = (tab === "slides") ? "block" : "none";

    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.tab-button[onclick="showPlayerTab('${tab}')"]`).classList.add("active");
  }
</script>

## Pwn

**Бинарные уязвимости (Pwn)** — это ошибки в низкоуровневом коде (обычно в скомпилированных исполняемых файлах на C / C++ / Rust), которые приводят к нарушению работы памяти или логики программы и могут позволить злоумышленнику выполнить произвольный код. Чаще всего это проблемы управления памятью — переполнение буфера (stack/heap buffer overflow), неверная работа со строками (format-string), неправильное освобождение памяти (use-after-free), переполнение целочисленных значений и т.п. Эти ошибки позволяют изменить поток управления программы, подменить адрес возврата, перезаписать указатели или данные и тем самым получить контроль над программой.

Анализ и эксплуатация таких уязвимостей требует знаний низкоуровневого программирования: представления памяти, работы стека, регистров процессора, ABI и системных вызовов. В исследовании используются дизассемблеры и отладчики, а в эксплойтинге — техники вроде переполнения стека, ROP (return-oriented programming), обхода защит (ASLR, DEP/NX, stack canaries) и построения полезной нагрузки. В контексте соревнований CTF категория Pwn развивает навыки понимания бинарников «изнутри» и умение превращать теоретические уязвимости в практические эксплойты.

## Подготовительное задание

### 1. «Pwn» от Hackerdom

!!! abstract "Описание задания"
    
    Пройдите вводный раздел **«Бинарные уязвимости»** из онлайн-курса по компьютерной безопасности для начинающих, подготовленного командой **Hackerdom**, на платформе **ULearn.me**.

Этапы выполнения:

1. Зарегистрируйтесь на образовательной платформе [**ULearn.me**](https://ulearn.me/).
2. Перейдите к курсу [**«Компьютерная безопасность для начинающих»**](https://ulearn.me/course/hackerdom) от команды [**Hackerdom**](https://hackerdom.ru/).
3. Изучите видеоматериалы и выполните задания раздела [**«Бинарные уязвимости»**](https://ulearn.me/course/Hackerdom/Vvedenie_v_binarnye_uyazvimosti_4895ff12-8a51-45d1-a32e-956347066598).
