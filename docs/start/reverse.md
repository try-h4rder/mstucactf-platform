# Обратная разработка
**Цель раздела** — изучить основы обратной разработки как одного из направлений этичного хакинга.

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

## Reverse Engineering

**Обратная разработка (Reverse Engineering)** — это процесс исследования уже скомпилированных программ с целью понять их внутреннее устройство и принцип работы. Она позволяет анализировать поведение программы как “чёрного ящика” — когда исходный код недоступен, но по реакции на входные данные можно восстановить логику её работы. Такой подход часто используется в кибербезопасности для изучения вредоносного ПО, защиты программ от взлома и часто встречается в заданиях CTF.

Основой реверса является **низкоуровневое программирование**, когда специалист работает с машинными командами, регистрами процессора и памятью. Программы анализируются на уровне **ассемблера**, а не привычных высокоуровневых языков. Важную роль играют понятия **стека**, **адресного пространства** и **инструкций процессора**, основанных на принципах архитектуры фон Неймана.

Для изучения бинарных файлов используются инструменты **дизассемблирования** (преобразование машинного кода в язык ассемблера) и **отладки** (пошаговое выполнение программы). Знание низкоуровневых принципов помогает выявлять **бинарные уязвимости** — ошибки в работе памяти и управлении данными, которые могут привести к исполнению произвольного кода. Обратная разработка — важный навык для специалистов по кибербезопасности, позволяющий понимать устройство программ «изнутри».

## Подготовительное задание

### 1. «Reverse» от Hackerdom

!!! abstract "Описание задания"
    
    Пройдите вводные разделы **«Низкоуровневое программирование»** и **«Reverse Engineering»** из онлайн-курса по компьютерной безопасности для начинающих, подготовленного командой **Hackerdom**, на платформе **ULearn.me**.

Этапы выполнения:

1. Зарегистрируйтесь на образовательной платформе [**ULearn.me**](https://ulearn.me/).
2. Перейдите к курсу [**«Компьютерная безопасность для начинающих»**](https://ulearn.me/course/hackerdom) от команды [**Hackerdom**](https://hackerdom.ru/).
3. Изучите видеоматериалы и выполните задания раздела [**«Низкоуровневое программирование»**](https://ulearn.me/course/hackerdom/e1ab44a2-c4c4-45f5-807b-cbea25dd743d).
4. Изучите видеоматериалы и выполните задания раздела [**«Reverse Engineering»**](https://ulearn.me/course/Hackerdom/Vvedenie_v_Reverse_Engineering_88892f91-997b-4739-a305-ada5ffff7439).
5. Ответьте на все вопросы тестов, представленных в этих двух разделах.
