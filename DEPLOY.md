# Публикация на GitHub Pages

Проект уже собран как статический сайт: `index.html`, `styles.css`, `app.js`.

## Как опубликовать

1. Создай новый репозиторий на GitHub, например `ege-task4-trainer`.
2. Загрузи в него файлы проекта.
3. Убедись, что основная ветка называется `main`.
4. Открой настройки репозитория: `Settings` → `Pages`.
5. В поле `Source` выбери `GitHub Actions`.
6. Сделай push в ветку `main`.
7. Дождись завершения workflow `Publish GitHub Pages`.

После публикации сайт будет доступен по ссылке вида:

```text
https://username.github.io/ege-task4-trainer/
```

`username` заменится на имя GitHub-аккаунта, а `ege-task4-trainer` — на имя репозитория.

## Что публикуется

Workflow собирает `app.js` из исходников и отправляет на GitHub Pages только файлы, нужные браузеру:

- `index.html`
- `styles.css`
- `app.js`
- `.nojekyll`

Приложению не нужен сервер. Прогресс, статистика, сложные слова и настройки звука сохраняются в `localStorage` браузера пользователя.

## Локальная проверка перед публикацией

```bash
node --check src/main.js
node build-bundle.mjs
node --check app.js
```
