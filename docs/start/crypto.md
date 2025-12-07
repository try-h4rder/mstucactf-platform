# Криптография
**Цель раздела** — изучить основы криптографии как одного из направлений этичного хакинга и научиться применять простые методы шифрования и дешифрования при решении задач CTF:

- изучить математические проблемы, на которых строится криптография,
- освоить различные виды представления информации и способы её преобразования,
- познакомиться с онлайн-площадками для практики в криптографии.

<div class="player-switch">
  <button class="tab-button active" onclick="showPlayerTab('meetup')">Встреча</button>
  <button class="tab-button" onclick="showPlayerTab('slides')">Презентация</button>
  <button class="tab-button" onclick="showPlayerTab('writeup')">Разбор</button>
</div>

<div id="meetup-tab" class="tab-content" style="display: block;">
	<div class="media-container">
		<iframe src="https://rutube.ru/play/embed/11715f7858c2906c021584099f863a7f/?skinColor=526cfe" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen>
		</iframe>
	</div>
</div>

<div id="slides-tab" class="tab-content" style="display: none;">
	<div class="media-container">
		<iframe src="https://docs.google.com/presentation/d/1KQjJuJQmots4zxHQgqrKzhhNO_IENBWs/embed?start=false&loop=false&delayms=3000" frameborder="0" allowfullscreen>
		</iframe>
	</div>
</div>

<div id="writeup-tab" class="tab-content" style="display: none;">
	<div class="media-container">
		<iframe src="https://rutube.ru/play/embed/9128b66339c20a5d6a1d9d93d72e9264/?skinColor=526cfe" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen>
		</iframe>
	</div>
</div>

<script>
  function showPlayerTab(tab) {
    document.getElementById("meetup-tab").style.display = (tab === "meetup") ? "block" : "none";
    document.getElementById("slides-tab").style.display = (tab === "slides") ? "block" : "none";
    document.getElementById("writeup-tab").style.display = (tab === "writeup") ? "block" : "none";

    document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.tab-button[onclick="showPlayerTab('${tab}')"]`).classList.add("active");
  }
</script>

## Кратко о криптографии

Криптография — это наука о защите информации с помощью шифрования. В этой области важную роль играет **ключ** — секретная информация, необходимая для шифрования и расшифровки данных. Существуют разные методы криптографии: **симметричное шифрование**, где один ключ используется и для шифрования, и для расшифровки, и **асимметричное шифрование** (например, RSA), где применяются два разных ключа — публичный и приватный.

Криптосистемы могут подвергаться атакам, таким как **brute force** (перебор всех возможных ключей) или **частотный анализ**, который позволяет вскрывать шифры замены на основе частоты появления символов в языке.

Ещё одним важным инструментом в криптографии являются **хэш-функции** — алгоритмы, преобразующие данные в строку фиксированной длины, так называемый «отпечаток». Хэши легко вычислить, но практически невозможно восстановить исходные данные по хэшу. Они используются для проверки целостности данных (например, через **контрольные суммы**) и для безопасного хранения паролей. Однако даже хэш-функции не лишены слабостей: **коллизии**, когда разные данные дают одинаковый хэш, могут быть использованы злоумышленниками.

## Подготовительное заданиеи

### 1. Криптография от Hackerdom

!!! abstract "Описание задания"

    Пройдите вводные разделы **«Криптография»** и **«Хеши и биткоины»** из онлайн-курса по компьютерной безопасности для начинающих, подготовленного командой **Hackerdom**, на платформе **ULearn.me**.

Этапы выполнения:

1. Зарегистрируйтесь на образовательной платформе [**ULearn.me**](https://ulearn.me/).
2. Перейдите к курсу [**«Компьютерная безопасность для начинающих»**](https://ulearn.me/course/hackerdom) от команды [**Hackerdom**](https://hackerdom.ru/).
3. Изучите видеоматериалы и выполните задания раздела [**«Криптография»**](https://ulearn.me/course/Hackerdom/Istoriya_kriptografii_952ab6b0-cfe3-40fa-ba7e-0509326049ce).
4. Изучите видеоматериалы и выполните задания раздела [**«Хеши и биткоины»**](https://ulearn.me/course/Hackerdom/Khesh_funktsii_248cee8f-1f7f-410a-a09a-93f8935b82ad).
5. Ответьте на все вопросы тестов, представленных в этих двух разделах.

## Основное задание

### 1. Практикум: `CryptoHack`

!!! abstract "Описание задания"
    
    Выполните начальные задания на платформе **CryptoHack**, чтобы познакомиться с основами криптографии на практике. Для лучшего закрепления материала решите все задания первых разделов — **«Introduction»** и **«General»**.

Этапы выполнения:

1. Зарегистрируйтесь на платформе [CryptoHack](https://cryptohack.org/).
2. Пройдите курс [**«Introduction to CryptoHack»**](https://cryptohack.org/courses/intro/course_details/).
3. При желании дорешайте оставшиеся задания в модулях [**«Introduction»**](https://cryptohack.org/challenges/introduction/) и [**«General»**](https://cryptohack.org/challenges/general/).

!!! tip "Подсказка"
    
    Для решения заданий вам понадобятся навыки программирования и работы в Linux, изученные ранее.

## Тестирование

<quiz>
Пользователь сгенерировал пароль для архива при помощи Python:
```python
from hashlib import md5
md5(str(random_year).encode()).hexdigest()[:8]
```
где `random_year` — это целое число, представляющее год.

Вопрос — какое минимальное количество попыток потребуется для гарантированного подбора пароля методом полного перебора?

- [ ] 365
- [ ] 1 000 - 7
- [x] 10 000
- [ ] 16^8 (8-я степень)
- [ ] 2^128 (128-я степень)

Пароль формируется как MD5-хэш от строкового представления года, обрезанный до 8 шестнадцатеричных символов. Однако пространство перебора определяется не всеми возможными 8-символьными шестнадцатеричными строками (16^8 вариантов), а диапазоном значений `random_year`. Если предположить, что год — это, например, число от 0 до 9 999 (практически все реальные даты), то максимальное количество уникальных паролей — 10 000.
</quiz>

<quiz>
Случай из жизни — одним прекрасным днём ваш друг поставил себе статус в мессенджере:
```
0JTQuNC80LDRgSDRgdC60LDRh9Cw0Lkg0LHRg9GA0L8hISEh
```
Что означает этот статус?

- [x] Димас скачай бурп!!!!
- [ ] Будущий DevSecFlexSexOpsPops
- [ ] Какой ещё WhatsApp?!
- [ ] wish to visit Milfgaard
- [ ] здесь может быть Ваша реклама

Строка закодирована в Base64. Раскодировать можно либо самостоятельно, например, при помощи Python:
```python
from base64 import b64decode
b64decode(b'0JTQuNC80LDRgSDRgdC60LDRh9Cw0Lkg0LHRg9GA0L8hISEh').decode()
```
либо при помощи online-инструментов, например, [CyberChef](https://gchq.github.io/CyberChef/#recipe=From_Base64('A-Za-z0-9%2B/%3D',true,false)).
</quiz>

<!-- mkdocs-quiz results -->

## Рекомендуемые ресурсы

- [**CyberChef**](https://gchq.github.io/CyberChef/) — online инструмент с множеством кодировок, шифров, анализаторов и прочего.
- [**CryptoHack**](https://cryptohack.org) — геймифицированная интерактивная платформа по криптографии. Браузерный учебник / CTF-симулятор с уровнями и ачивками: интерактивные задачи помогают изучать современные алгоритмы и ошибки их внедрения, удобно для новичков и тех, кто хочет прокачать практические навыки.
- [**Cryptopals**](https://cryptopals.com) — практические наборы задач по криптографии. Серия тщательно продуманных упражнений, которые шаг за шагом учат основам криптографии и показывают реальные уязвимости — от простых операций с байтами и XOR до атак на блочные шифры и RNG; ориентирована на практическое понимание, а не на академическую теорию.