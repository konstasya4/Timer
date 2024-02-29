# Задание: разработать одностраничное приложение управляющее работой таймеров.

Требуется создать компонент TimeManager, который управляет двумя компонентами Timer.

Компонент Timer:
-
Компонент Timer должен вести обратный отсчёт в минутах и секундах. Поскольку требуется два компонента Timer, при запуске двух таймеров должен отображаться интерфейс только одного из них. Таймеры должны вести обратный отсчёт даже при отсутствии отображения. По истечении времени вместо индикатора должно выводиться "ГОТОВО".

Компонент TimeManager:
-
**Данный компонент должен содержать:**
- Два поля ввода для разных счётчиков
- Кнопку старта и остановки таймера
- Кнопку сброса
- Кнопку переключения таймера

В проекте с помощью переменной visualeTimer контролировалось отображение таймеров. Вся основная логика проекта содержится в данном компоненте. Для сохранения значений использовался хук useState(), а для работы счётчиков useEffect().

Возможности проекта:
-
- Каждый счётчик ведёт отдельный счёт; при нажатии кнопки "Стоп" останавливается только счётчик, отображаемый в данный момент. То же самое относится к кнопке "Старт" и "Рестарт".
- При вводе нового числа в поле ввода таймер начинает новый отсчёт.

