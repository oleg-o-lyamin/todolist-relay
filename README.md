# Todo List

## Комментарии к коду

1. Запуск graphql-сервера. В package.json в скрипте запуска сервера можно поменять порт. Сейчас 4000.

```
yarn run start-server
```

Запуск react-сервера:

```
yarn start
```

2. В компоненте **App** колбэк refresh, который принудительно подкачивает массив всех todo с graphql-сервера. Сделано по причине возникновения ошибки во время удаления todo по клику на кнопке с корзиной при использовании директивы @deleteRecord в мутации TodoDeleteMutation в компоненте **Todo**. Ошибка описана здесь: https://github.com/facebook/relay/issues/3514

3. Насколько я понял, важнейшей частью relay является использование фрагментов. Однако ввиду простоты запросов приложения не увидел смысла в прикручивании фрагментов.

4. Клик по наименованию todo в списке позволит отредактировать его.

5. В .env.local лежит порт (4000), на котором react-сервер ожидает слушающего graphql-сервера. По этой причине
   .env.local сделан общедоступным файлом и убран из .gitignore, хотя понимаю, что в норме так по соображениям безопасности не делается.

6. Нет строгой типизации.
