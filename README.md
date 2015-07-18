Aplikacja dla PBCSA
-------------------

1. Jak uruchomi�?

Nale�y otworzy� plik index.html w przegl�darce w celu wy�wietlania listy pracownik�w lub plik messanger.html w celu wys�ania wiadomo�ci.

2. Za co odpowiadaj� pliki w aplikacji?

> index.html - g�owny frontend aplikacji wy�wietlaj�cej pracownik�w i powiadomienia
> messenger.html - aplikacja rozsy�aj�ca wiadomo�ci do pracownik�w
> css/modal.html - szablon komunikatu typu modal
> js/controller.js - g��wny kontroler dla angularjs obs�uguj�cy aplikacj�/websockety
> !server/server.js - g��wny backend obs�uguj�cy baz� mongodb, websockety
> !server/spam.js - plik dzia�aj�cy pod kontrol� crona wysy�aj�cy wiadomo�ci dla kobiet i na 8 marca

3. Jak uruchomi� w�asny serwer?

Nale�y zainstalowa� nodejs oraz mongodb na maszynie, skopiowa� pliki z !server oraz zaimportowa� baz� danych z pliku mongo.txt, nast�pnie wykona� polecenia 'nodejs server.js' lub 'nodejs spam.js'.
Obecnie w celach testowych uruchomiony zosta� serwer node.js oraz mongodb pod adresem http://212.18.233.173:3000 (system Debian 7).

Pozdrawiam, FB.
