import React from 'react'
import LayoutGlobal from '../components/LayoutGlobal'
import ToggleGlobal from '../components/ToggleGlobal'

export default function PolitykaPrywatnosci() {
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Polityka prywatności</h1>
        <p className='page_paragraph polityka_p'>Cieszę się, że tutaj jesteś, bo to oznacza, że wyjątkowo cenisz swoją prywatność. Rozumiem to doskonale, dlatego przygotowałem dla Ciebie ten dokument. Znajdziesz tutaj informacje o zasadach przetwarzania Twoich danych osobowych, wykorzystywaniu plików cookies oraz innych technologiach śledzących w związku z korzystaniem ze strony www.fizjopersonalny.pl. Trochę formalności na początek.</p>
        <p className='page_paragraph polityka_p'>Administratorem strony jestem ja, czyli Łukasz Kaleńczuk, prowadzący działalność gospodarczą pod nazwą (firmą) Łukasz Kaleńczuk - FizjoPersonalny, z siedzibą w Warszawie pod adresem ul. Wrzeciono 63a/2b, (01-950), o numerze NIP 764-246-99-20. W razie jakichkolwiek pytań związanych z polityką prywatności, w każdej chwili możesz się ze mną skontaktować, wysyłając wiadomość na adres: <a href="mailto:lukasz@fizjopersonalny.pl" target="_blank" rel="noreferrer" className='page_link'>lukasz@fizjopersonalny.pl</a>.</p>

        <ToggleGlobal title="Najważniejsze informacje w skrócie">
        <p className='page_paragraph polityka_p'>Cenię sobie Twoją prywatność, ale również Twój czas. Dlatego poniżej znajdziesz skróconą wersję najważniejszych zasad związanych z ochroną prywatności na mojej stronie.</p>
        <ul className='page_ul'>
          <li className='page_li'>Zapisując się na listę subskrybentów (newsletter), przekazujesz mi swoje dane osobowe, a ja gwarantuje Ci, że Twoje dane pozostaną poufne, bezpiecznie i nie zostaną udostępnione jakimkolwiek podmiotom trzecim bez Twojej wyraźnej zgody.</li>
          <li className='page_li'>Strona korzysta z narzędzi analitycznych (Google Analytics), które zbierają anonimowe informacje na temat Twoich odwiedzin serwisu, takie jak podstrony, które wyświetliłeś, czas, jaki spędziłeś w serwisie czy przejścia pomiędzy poszczególnymi podstronami.</li>
          <li className='page_li'>Korzystam z narzędzi remarketingowych, takich jak Facebook Pixel i Google AdWords, które pozwalają wyświetlać Ci reklamy zachęcające do powrotu na stronę w celu podjęcia jakiegoś działania.</li>
          <li className='page_li'>W ramach strony bloga dostępne są funkcje społecznościowe, takie jak przyciski służące do udostępniania treści w serwisach społecznościowych, likeboxy, czy też materiały embedowane z serwisów zewnętrznych. Korzystanie z tych funkcji wymaga akceptacji plików cookies podmiotów trzecich, takich jak Facebook czy Youtube.</li>
          <li className='page_li'>Wykorzystuję pliki cookies, byś mógł w sposób komfortowy korzystać ze strony.</li>
        </ul>
        <p className='page_paragraph polityka_p'>Jeżeli powyższe informacje nie są dla Ciebie wystarczające, poniżej znajdziesz więcej szczegółów.</p>
        </ToggleGlobal>

        <ToggleGlobal title="Dane osobowe">
        <p className='page_paragraph polityka_p'>Administratorem Twoich danych osobowych w rozumieniu przepisów o ochronie danych osobowych jest Łukasz Kaleńczuk – FizjoPersonalny, prowadzący działalność gospodarczą w Warszawie pod adresem ul. Wrzeciono 63a/2b, (01-950), o numerze NIP 764-246-99-20.</p><p className='page_paragraph polityka_p'>Cele, podstawy prawne oraz okres przetwarzania danych osobowych wskazane są odrębnie w stosunku do każdego celu przetwarzania danych (patrz: postanowienia poniżej zawierające szczegółowy opis różnych celów przetwarzania danych).</p><p className='page_paragraph polityka_p'>W związku z przetwarzaniem przeze mnie Twoich danych osobowych, przysługują Ci prawo do:</p>
        <ul className='page_ul'>
          <li className='page_li'>żądania dostępu do swoich danych osobowych, ich sprostowania, usunięcia lub ograniczenia przetwarzania;</li>
          <li className='page_li'>wniesienia sprzeciwu wobec przetwarzania;</li>
          <li className='page_li'>przenoszenia danych;</li>
          <li className='page_li'>cofnięcia zgody na przetwarzanie danych osobowych w określonym celu, jeżeli uprzednio wyraziłeś taką zgodę;</li>
          <li className='page_li'>wniesienia skargi do organu nadzorczego w związku z przetwarzaniem przeze mnie danych osobowych.</li>
        </ul>
        <p className='page_paragraph polityka_p'>Powyższe uprawnienia możesz realizować zgodnie z zasadami opisanymi w art. 16 – 21 RODO, kontaktując się ze mną pod adresem <a href="mailto:lukasz@fizjopersonalny.pl" target="_blank" rel="noreferrer" className='page_link'>lukasz@fizjopersonalny.pl</a>. Mogę odmówić Ci realizacji niektórych uprawnień spośród wskazanych powyżej w sytuacji, w której realizacja danego uprawnienia stałaby w sprzeczności z uzasadnionym celem przetwarzania przeze mnie danych. Przykładowo, mogę odmówić Ci usunięcia danych osobowych zawartych w złożonym przez Ciebie zamówieniu do czasu upływu terminu przedawnienia roszczeń z tytułu zawartej ze mną umowy.</p>
        <p className='page_paragraph polityka_p'>Podanie przez Ciebie danych osobowych jest zawsze dobrowolne, ale niezbędne, by zapisać się do listy subskrybentów (newslettera) lub po prostu skontaktować się ze mną.</p>
        <p className='page_paragraph polityka_p'>Gwarantuję Ci poufność wszelkich przekazanych mi danych osobowych. Zapewniam podjęcie wszelkich środków bezpieczeństwa i ochrony danych osobowych wymaganych przez przepisy o ochronie danych osobowych. Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione przed dostępem do nich przez osoby do tego nieupoważnione.</p>
        <p className='page_paragraph polityka_p'>Powierzam przetwarzanie danych osobowych następującym podmiotom:</p>
        <ul className='page_ul'>
          <li className='page_li'>zenbox sp. z o.o., ul. Dąbrowskiego 7, 42-200 Częstochowa, NIP 949-219-10-21 – w celu przechowywania danych na serwerze;</li>
          <li className='page_li'>OVH Sp. z o.o., ul. Swobodna 1, 50-088 Wrocław, NIP: 899-25-20-556 – w celu przechowywania danych na serwerze;</li>
          <li className='page_li'>MailerLite Limited, Ground Floor, 71 Lower Baggot Street, Dublin 2, D02 P593, Ireland – w celu korzystania z systemu mailingowego MailerLite.</li>
        </ul>
        </ToggleGlobal>

        <ToggleGlobal title="Kontakt za pośrednictwem e-mail">
        <p className='page_paragraph polityka_p'>Kontaktując się ze mną za pośrednictwem poczty elektronicznej (w tym również za pośrednictwem formularza kontaktowego) w sposób naturalny przekazujesz mi swój adres e-mail jako adres nadawcy wiadomości. Ponadto, w treści wiadomości możesz zawrzeć również inne dane osobowe. Podstawą prawną przetwarzania danych osobowych w takim przypadku jest Twoja zgoda wynikająca z zainicjowania ze mną kontaktu. Twoje dane osobowe przekazywane mi w ramach kontaktu e-mailowego przetwarzane są wyłącznie w celu obsługi Twojego zapytania. Treść korespondencji może podlegać archiwizacji. Korespondencja przechowywana jest na serwerze skrzynki pocztowej (zenbox).</p>
        </ToggleGlobal>

        <ToggleGlobal title="Pliki cookies i inne technologie śledzące">
        <p className='page_paragraph polityka_p'>Strona www.fizjopersonalny.pl, podobnie jak niemal wszystkie inne strony internetowe, wykorzystuje pliki cookies, by zapewnić Ci najlepsze doświadczenia związane z korzystaniem z niej. Cookies to niewielkie informacje tekstowe, przechowywane na Twoim urządzeniu końcowym (np. komputerze, tablecie, smartfonie), które mogą być odczytywane przez mój system teleinformatyczny.</p>
        <p className='page_paragraph polityka_p'>Cookies pozwalają mi:</p>
        <ul className='page_ul'>
          <li className='page_li'>zapewnić prawidłowe funkcjonowanie strony jakiego oczekujesz;</li>
          <li className='page_li'>pamiętać Twoje ustawienia podczas i pomiędzy wizytami na stronie;</li>
          <li className='page_li'>poprawić szybkość i bezpieczeństwo korzystania ze strony;</li>
          <li className='page_li'>umożliwiać Ci udostępnianie treści w serwisach społecznościowych;</li>
          <li className='page_li'>umożliwiać Ci odtwarzanie treści pochodzących z serwisów zewnętrznych;</li>
          <li className='page_li'>ulepszać funkcje dostępne dla Ciebie w ramach strony;</li>
          <li className='page_li'>korzystać z narzędzi marketingowych;</li>
          <li className='page_li'>kierować do Ciebie spersonalizowane reklamy.</li>
        </ul>
        <p className='page_paragraph polityka_p'>Więcej szczegółów znajdziesz poniżej.</p>
        </ToggleGlobal>

        <ToggleGlobal title="Zgoda na cookies">
        <p className='page_paragraph polityka_p'>Podczas pierwszej wizyty w serwisie wyświetlana jest Ci informacja na temat stosowania plików cookies. Zaakceptowanie i zamknięcie tej informacji oznacza, że wyrażasz zgodę na wykorzystywanie plików cookies zgodnie z postanowieniami niniejszej polityki prywatności. Zgodę zawsze możesz wycofać, usuwając pliki cookies oraz zmieniając ustawienia plików cookies w Twojej przeglądarce. Pamiętaj jednak, że wyłączenie plików cookies może powodować trudności w korzystaniu z serwisu, jak również z wielu innych stron internetowych, które stosują cookies.</p>
        </ToggleGlobal>

        <ToggleGlobal title="Cookies własne">
        <p className='page_paragraph polityka_p'>Pliki cookies można podzielić na własne oraz pochodzące od podmiotów trzecich. Jeżeli chodzi o cookies własne, wykorzystuję je w celu prawidłowego działania strony, a w szczególności w następujących celach:</p>
        <ul className='page_ul'>
          <li className='page_li'>prawidłowe działanie pop-upów i formularzy;</li>
          <li className='page_li'>możliwość dodawania komentarzy;</li>
          <li className='page_li'>odnotowanie faktu akceptacji polityki prywatności.</li>
        </ul>
        </ToggleGlobal>

        <ToggleGlobal title="Cookies podmiotów trzecich">
        <p className='page_paragraph polityka_p'>Strona www.fizjopersonalny.pl, podobnie jak większość współczesnych stron internetowych, wykorzystuje funkcje udostępniane przez serwisy zewnętrzne, takie jak Facebook czy Youtube. Odtwarzanie widocznych w serwisie embedowanych z Youtube filmów wideo łączy się z akceptacją plików cookies Youtube. Cookies podmiotów trzecich wykorzystywane są również w ramach remarketingu realizowanego z wykorzystaniem Pixela Facebooka i Google AdWords oraz w ramach działań statystycznych, o których mowa poniżej.</p>
        </ToggleGlobal>

        <ToggleGlobal title="Cookies wykorzystywane w celach statystycznych">
        <p className='page_paragraph polityka_p'>Wykorzystuję cookies do śledzenia statystyk strony, takich jak liczba osób odwiedzających stronę, rodzaj systemu operacyjnego i przeglądarki internetowej wykorzystywanej do przeglądania strony, czas spędzony na stronie, odwiedzone podstrony etc. Korzystam w tym zakresie z Google Analytics. Zbierane w tym zakresie informacje są całkowicie anonimowe i nie pozwalają na Twoją identyfikację.</p>
        </ToggleGlobal>

        <ToggleGlobal title="Remarketing">
        <p className='page_paragraph polityka_p'>Wykorzystuję cookies w celu prowadzenia działań remarketingowych polegających na prezentowaniu Ci reklam zachęcających do powrotu do serwisu lub skorzystania z jakichś promocji, zniżek etc. W tym celu wykorzystuję Pixel Facebooka oraz sieć Google AdWords.</p>
        </ToggleGlobal>

        <ToggleGlobal title="Logi serwera">
        <p className='page_paragraph polityka_p'>Korzystanie ze strony wiąże się z przesyłaniem zapytań do serwera, na którym przechowywana jest strona. Każde zapytanie skierowane do serwera zapisywane jest w logach serwera. Logi obejmują m.in. Twój adres IP, datę i czas serwera, informacje o przeglądarce internetowej i systemie operacyjnym z jakiego korzystasz. Logi zapisywane i przechowywane są na serwerze. Dane zapisane w logach serwera nie są kojarzone z konkretnymi osobami korzystającymi ze strony i nie są wykorzystywane przeze mnie w celu Twojej identyfikacji. Logi serwera stanowią wyłącznie materiał pomocniczy służący do administrowania serwisem a ich zawartość nie jest ujawniana nikomu poza osobami upoważnionymi do administrowania serwerem.</p>
        </ToggleGlobal>

      </div>
    </LayoutGlobal>
  )
}
