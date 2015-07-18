Aplikacja dla PBCSA
-------------------

1. Jak uruchomiæ?

Nale¿y otworzyæ plik index.html w przegl¹darce w celu wyœwietlania listy pracowników lub plik messanger.html w celu wys³ania wiadomoœci.

2. Za co odpowiadaj¹ pliki w aplikacji?

> index.html - g³owny frontend aplikacji wyœwietlaj¹cej pracowników i powiadomienia
> messenger.html - aplikacja rozsy³aj¹ca wiadomoœci do pracowników
> css/modal.html - szablon komunikatu typu modal
> js/controller.js - g³ówny kontroler dla angularjs obs³uguj¹cy aplikacjê/websockety
> !server/server.js - g³ówny backend obs³uguj¹cy bazê mongodb, websockety
> !server/spam.js - plik dzia³aj¹cy pod kontrol¹ crona wysy³aj¹cy wiadomoœci dla kobiet i na 8 marca

3. Jak uruchomiæ w³asny serwer?

Nale¿y zainstalowaæ nodejs oraz mongodb na maszynie, skopiowaæ pliki z !server oraz zaimportowaæ bazê danych z pliku mongo.txt, nastêpnie wykonaæ polecenia 'nodejs server.js' lub 'nodejs spam.js'.
Obecnie w celach testowych uruchomiony zosta³ serwer node.js oraz mongodb pod adresem http://212.18.233.173:3000 (system Debian 7).

Pozdrawiam, FB.
