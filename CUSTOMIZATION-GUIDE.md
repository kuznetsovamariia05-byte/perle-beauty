# 🎨 Perle Beauty Salon - Руководство по кастомизации

## 🚀 Быстрый старт

Этот сайт полностью готов к копированию и использованию. Никаких баз данных или серверов не требуется!

---

## 📝 Что можно легко изменить

### 1. 📅 Система бронирования (ВАЖНО!)

**Файл:** `/src/app/components/Booking.tsx`

Найдите строки 14 и 25 и замените URL:

```tsx
bookingUrl: 'https://your-booking-system.com'
```

на вашу систему бронирования (Calendly, Simplybook.me, Booksy и т.д.)

**Пример для Calendly:**
```tsx
bookingUrl: 'https://calendly.com/perle-vienna'
```

---

### 2. 📞 Контактная информация

**Файл:** `/src/app/components/Footer.tsx`

Измените:
- **Email** (строка ~88): `hello@perle-vienna.at`
- **Телефон** (строка ~94): `+43 1 234 5678`
- **Instagram** (строка ~119): `@perle_vienna`
- **Адрес** (строка ~100): `Bruno-Marek-Allee, 1020 Wien, Austria`

---

### 3. 🗺️ Адрес на карте

**Файл:** `/src/app/components/Location.tsx`

**Строка 28:** Измените адрес:
```tsx
const address = 'Bruno-Marek-Allee, 1020 Wien, Austria';
```

**Строка 52:** Обновите Google Maps embed (получите новый iframe на [Google Maps](https://www.google.com/maps))

---

### 4. 💅 Услуги и цены

**Файл:** `/src/app/components/Services.tsx`

**Строки 20-48** (английские услуги) и **строки 50-78** (немецкие услуги):

```tsx
services: {
  nails: [
    { name: "Signature Women's Manicure", price: '€65' },
    // добавьте или измените услуги здесь
  ],
  brows: [
    { name: 'Brow Shaping & Styling', price: '€35' },
    // добавьте или измените услуги здесь
  ],
  lashes: [
    { name: 'Lash Lift', price: '€95' },
    // добавьте или измените услуги здесь
  ]
}
```

---

### 5. 🎨 Цвета сайта

**Файл:** `/src/styles/theme.css`

Основные цвета находятся в переменных (строки 11-20):

```css
--primary: #63402C;        /* Коричневый */
--secondary: #C2B19C;      /* Бежевый */
--muted: #9A958E;          /* Серо-бежевый */
--background: #F9F8F7;     /* Фон */
--foreground: #1C1C1C;     /* Текст */
```

---

### 6. 📱 Социальные сети

**Файл:** `/src/app/components/Footer.tsx`

**Instagram** (строка ~119):
```tsx
href="https://instagram.com/perle_vienna"
```

Замените `perle_vienna` на ваш Instagram handle.

---

### 7. 🌐 Языки

Сайт поддерживает **английский** и **немецкий** языки.

Чтобы изменить тексты, найдите объект `translations` в каждом компоненте:

**Файлы:**
- `/src/app/components/Hero.tsx`
- `/src/app/components/Services.tsx`
- `/src/app/components/Booking.tsx`
- `/src/app/components/About.tsx`
- `/src/app/components/Location.tsx`
- `/src/app/components/Footer.tsx`

**Пример:**
```tsx
const translations = {
  en: {
    title: 'Your English Title',
    // ...
  },
  de: {
    title: 'Ihr Deutscher Titel',
    // ...
  }
};
```

---

### 8. 🏢 О салоне

**Файл:** `/src/app/components/About.tsx`

**Строки 11-12** (английский) и **строки 53-54** (немецкий):

```tsx
intro: 'Your salon description here...'
```

Измените описание салона и особенности (features) по вашему желанию.

---

## 🎯 Дополнительные настройки

### Изменить название салона "PERLE"

1. **Hero секция** (`/src/app/components/Hero.tsx`, строка ~49)
2. **Header** (`/src/app/components/Header.tsx`, строка ~47)
3. **Footer** (`/src/app/components/Footer.tsx`, строка ~54)

### Добавить больше специалистов

В старой версии был список специалистов. Если хотите добавить команду, создайте новую секцию или добавьте в About.

---

## ✅ Проверка перед публикацией

- [ ] Обновлен URL системы бронирования
- [ ] Изменены контактные данные (email, телефон, адрес)
- [ ] Обновлены соцсети (Instagram)
- [ ] Проверены все цены услуг
- [ ] Обновлена карта Google Maps
- [ ] Протестированы обе языковые версии

---

## 🚀 Готово!

После внесения изменений сайт готов к публикации. Все изменения применятся автоматически при обновлении страницы.

**Никакой базы данных или backend не требуется!** 🎉
