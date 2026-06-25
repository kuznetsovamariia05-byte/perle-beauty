# Perle Beauty Salon - Инструкции по настройке

## 🎨 Дизайн полностью готов к копированию!

Этот сайт не использует базы данных или backend - всё работает на чистом фронтенде и идеально копируется.

## 📅 Настройка системы бронирования

Чтобы подключить вашу систему онлайн-записи:

1. Откройте файл `/src/app/components/Booking.tsx`
2. Найдите строки с `bookingUrl` (примерно строки 14 и 25)
3. Замените `'https://your-booking-system.com'` на ссылку вашей системы бронирования

### Примеры популярных систем бронирования:

- **Calendly**: `https://calendly.com/your-username`
- **Simplybook.me**: `https://your-company.simplybook.me`
- **Acuity Scheduling**: `https://your-company.acuityscheduling.com`
- **Square Appointments**: `https://square.site/book/YOUR-ID`
- **Booksy**: Ваша ссылка на профиль Booksy
- **Любая другая система**: просто вставьте вашу ссылку

### Пример настройки для Calendly:

```tsx
en: {
  bookingUrl: 'https://calendly.com/perle-vienna',
  // ... остальной код
},
de: {
  bookingUrl: 'https://calendly.com/perle-vienna',
  // ... остальной код
}
```

## 🎨 Цветовая палитра

- **Основной коричневый**: `#63402C`
- **Бежевый**: `#C2B19C`
- **Серо-бежевый**: `#9A958E`
- **Фон**: `#F9F8F7`
- **Текст**: `#1C1C1C`

## 🔤 Шрифты

- **Заголовки**: Bebas Neue (Google Fonts)
- **Основной текст**: Inter (Google Fonts)

## 📱 Контактная информация

Обновите контакты в компоненте Footer (`/src/app/components/Footer.tsx`):

- Email: `hello@perle-vienna.at`
- Телефон: `+43 1 234 5678`
- Instagram: `@perle_vienna`
- Адрес: Bruno-Marek-Allee, 1020 Wien, Austria

## 🗺️ Карта Google Maps

Карта настроена на адрес: **Bruno-Marek-Allee, 1020 Wien, Austria**

Чтобы изменить адрес, откройте `/src/app/components/Location.tsx` и найдите iframe с Google Maps.

## ✨ Готово к использованию!

Сайт полностью готов к копированию и использованию. Все элементы статичны и не требуют настройки сервера или базы данных.
