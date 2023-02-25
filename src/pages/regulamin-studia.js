import React from 'react'
import { Link } from 'gatsby'
import LayoutGlobal from '../components/LayoutGlobal'
import ToggleGlobal from '../components/ToggleGlobal'

export default function RegulaminStudia() {
  return (
    <LayoutGlobal>
      <div className='page_box'>
        <h1 className='page_h1'>Regulamin organizacyjny Studia Medyczno-Treningowego</h1>

        
        <ToggleGlobal title="§1 Postanowienia ogólne">
        <p className='page_paragraph'>1. Używanie w Regulaminie pojęcia rozumie się następująco:</p>
        <ul className='page_ul'>
          <li className='page_li'>Studio - Studio Medyczno-Treningowe „FizjoPersonalny” zlokalizowane w Warszawie;</li>
          <li className='page_li'>Firma - działalność gospodarcza, której właścicielem jest Łukasz Kaleńczuk (NIP 764 246 99 20);</li>
          <li className='page_li'>Regulamin - regulamin organizacyjny Studia;</li>
          <li className='page_li'>Usługi - usługi oferowane przez Firmę;</li>
          <li className='page_li'>Klient - osoba fizyczna, osoba prawna lub podmiot nie posiadający osobowości prawnej, dokonująca zakupu Usług na rzecz Firmy na własny użytek (bez dalszej odsprzedaży);</li>
          <li className='page_li'>Pracownik - osoba wykonująca Usługę na rzecz Firmy;</li>
          <li className='page_li'>Polecający - Klient, który poleca Usługi osobom niebędącym Klientem Studia;</li>
          <li className='page_li'>Polecany - osoba, która zakupiła Usługę z polecenia Polecającego;</li>
          <li className='page_li'>Cennik - aktualny wykaz Usług realizowanych w Studio, dostępny pod adresem <Link className='page_link' to='../cennik'>www.fizjopersonalny.pl/cennik</Link>;</li>
          <li className='page_li'>Konto Bankowe - rachunek Firmy prowadzony przez mBank o numerze 63 1140 2004 0000 3302 7879 5415;</li>
          <li className='page_li'>RODO - Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE;</li>
          <li className='page_li'>Ustawa o prawach pacjenta - ustawa z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta.</li>
        </ul>
        <p className='page_paragraph'>2. Studio jest prowadzone przez Łukasza Kaleńczuka, posiadającego tytuł magistra fizjoterapii oraz prawo wykonywania zawodu fizjoterapeuty o numerze 26314. Pełny wykaz kwalifikacji jest dostępny pod adresem <Link className='page_link' to='../kwalifikacje'>www.fizjopersonalny.pl/kwalifikacje</Link>.</p>
        <p className='page_paragraph'>3. Studio to miejsce świadczenia Usług przez Firmę oraz inne podmioty współpracujące z Firmą.</p>
        <p className='page_paragraph'>4. Firma działa na podstawie:</p>
        <ul className='page_ul'>
          <li className='page_li'>przepisów ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej;</li>
          <li className='page_li'>wpisu numer 000000212214 do Rejestru Podmiotów Wykonujących Działalność Leczniczą prowadzonego przez Krajową Radę Fizjoterapeutów;</li>
          <li className='page_li'>RODO i Ustawy o prawach pacjenta;</li>
          <li className='page_li'>niniejszego Regulaminu.</li>
        </ul>
        </ToggleGlobal>

        <ToggleGlobal title="§2 Zakres świadczonych usług">
        <p className='page_paragraph'>1. Firma świadczy Usługi w zakresie fizjoterapii, masażu leczniczego, treningu personalnego, treningu medycznego, treningu przygotowania motorycznego oraz usług dydaktycznych.</p>
        <p className='page_paragraph'>2. Klient posiada możliwość zakupu Usługi w formie jednostkowej lub pakietowej.</p>
        <p className='page_paragraph'>3. Usługa jednostkowa odnosi się do pojedynczej wizyty, która jest opłacana po jej zakończeniu.</p>
        <p className='page_paragraph'>4. Usługa pakietowa odnosi się do wielokrotnych wizyt ujętych w zbiorczy pakiet, który opłacany jest z góry po zakończeniu pierwszej wizyty z pakietu.</p>
        <p className='page_paragraph'>5. Klient, który dokonał zakupu Usługi pakietowej otrzyma informację o zakończeniu pakietu podczas ostatniej wizyty obejmującej pakiet.</p>
        <p className='page_paragraph'>6. Charakterystyka poszczególnych Usług jednostkowych oraz pakietowych (tj. liczba godzin, cena, zakres, czas ważności, itp.) została opisana szczegółowo w Cenniku.</p>
        <p className='page_paragraph'>7. Firma nie świadczy usług seksualnych. Próba fizycznego inicjowania bądź namawiania do czynności seksualnych, skutkuje natychmiastowym przerwaniem realizacji Usługi, pobraniem pełnej opłaty za przerwaną Usługę oraz wyproszeniem Klienta z terenu Studia.</p>
        <p className='page_paragraph'>8. Płatność za Usługi możliwa jest za pośrednictwem:</p>
        <ul className='page_ul'>
          <li className='page_li'>gotówki</li>
          <li className='page_li'>karty płatniczej (Mastercard, Visa, Diners, JCB, UPI);</li>
          <li className='page_li'>przelewu internetowegoa;</li>
          <li className='page_li'>telefonu komórkowego;</li>
          <li className='page_li'>systemu BLIK.</li>
        </ul>
        <p className='page_paragraph'>9. Firma posiada również w swojej ofercie produkty wirtualne, takie jak vouchery prezentowe czy kursy online, które dostępne są za pośrednictwem strony <a href="https://fizjopersonalny.sklep.pl/" target="_blank" rel="noreferrer" className='page_link'>www.fizjopersonalny.sklep.pl</a>.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§3 Zasady rezerwacji i odwoływania wizyty">
        <p className='page_paragraph'>1. Rezerwacja wizyty jest możliwa za pośrednictwem następujących kanałów komunikacyjnych:</p>
        <ul className='page_ul'>
          <li className='page_li'>telefon, pod numerem <a href="tel:0048790898938" target="_blank" rel="noreferrer" className='page_link'>790 898 938</a>;</li>
          <li className='page_li'>e-mail, pod adresem <a href="mailto:lukasz@fizjopersonalny.pl" target="_blank" rel="noreferrer" className='page_link'>lukasz@fizjopersonalny.pl</a>;</li>
          <li className='page_li'>aplikacja Facebook, w profilu <a href="https://www.facebook.com/FizjoPersonalny/" target="_blank" rel="noreferrer" className='page_link'>FizjoPersonalny</a>;</li>
          <li className='page_li'>aplikacja Instagram, w profilu <a href="https://www.instagram.com/FizjoPersonalny/" target="_blank" rel="noreferrer" className='page_link'>FizjoPersonalny</a>;</li>
          <li className='page_li'>aplikacja WhatsApp, pod numerem <a href="https://wa.me/48790898938" target="_blank" rel="noreferrer" className='page_link'>790 898 938</a>.</li>
        </ul>
        <p className='page_paragraph'>2. Dokonując rezerwacji Klient zobowiązany jest wskazać dokładny termin wizyty, tj. datę i godzinę. Wymagane jest również podanie imienia, nazwiska oraz numeru kontaktowego. Po zarezerwowaniu wizyty klient otrzyma SMS z potwierdzeniem rezerwacji wizyty.</p>
        <p className='page_paragraph'>3. Klient otrzymuje od Firmy wiadomość SMS z przypomnieniem o wizycie w dniu poprzedzającym wizytę. Klient zobowiązany jest do niezwłocznego odesłania wiadomości potwierdzającej obecność na wizycie. Brak potwierdzenie obecności na wizycie może skutkować anulowaniem wizyty i zwolnieniem terminu.</p>
        <p className='page_paragraph'>4. Przeniesienie wizyty jest możliwe najpóźniej do godziny 20:00 w dniu poprzedzającym wizytę. Przeniesienie wizyty na inny termin jest możliwe tylko pod warunkiem dostępności wolnego miejsca we wskazanym przez Klienta terminie. Klient składa prośbę o przeniesienie wizyty za pośrednictwem kanałów komunikacyjnych wymienionych w ust. 1. lub bezpośrednio w Studio.</p>
        <p className='page_paragraph'>5. Bezpłatne odwołanie wizyty jest możliwe do godziny 20:00 w dniu poprzedzającym wizytę. Klient składa prośbę o odwołanie wizyty za pośrednictwem kanałów komunikacyjnych wymienionych w ust. 1. lub bezpośrednio w Studio.</p>
        <p className='page_paragraph'>6. Odwołanie wizyty po godzinie 20:00 w dniu poprzedzającym wizytę, skutkuje obowiązkiem uiszczenia opłaty w wysokości 50% ceny Usługi. Klient uiszcza ww. opłatę niezwłocznie przelewem na Konto Bankowe.</p>
        <p className='page_paragraph'>7. Brak obecności Klienta na zarezerwowanej wizycie bez wcześniejszego odwołania skutkuje obowiązkiem uiszczenia opłaty w wysokości 100% ceny Usługi. Klient uiszcza ww. opłatę niezwłocznie przelewem na Konto Bankowe.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§4 Organizacja i przebieg wizyty">
        <p className='page_paragraph'>1. Podczas pierwszej wizyty Klient zobowiązany jest do wyrażenia w formie pisemnej zgody na realizację Usługi (<a href="zgoda-na-realizacje-uslugi.pdf" className='page_link' target="_blank" rel="noreferrer">załącznik 1</a>) oraz zgody na przetwarzanie danych osobowych (<a href="zgoda-na-przetwarzanie-danych.pdf" className='page_link' target="_blank" rel="noreferrer">załącznik 2</a>). Zakres wymaganych danych, sposób ich przetwarzania oraz ochrony opisano w §10 niniejszego Regulaminu.</p>
        <p className='page_paragraph'>2. W przypadku, gdy Klient jest osobą małoletnią, całkowicie ubezwłasnowolnioną lub niezdolną do świadomego wyrażania zgody, niezbędna jest pisemna zgoda na realizację Usługi podpisana przez przedstawiciela ustawowego (<a href="zgoda-przedstawiciela-ustawowego.pdf" className='page_link' target="_blank" rel="noreferrer">załącznik 3</a>).</p>
        <p className='page_paragraph'>3. Klient przychodzi na umówioną wizytę 10 minut przed zarezerwowaną godziną. Przybycie Klienta po zarezerwowanej godzinie skutkuje skróceniem czasu realizacji Usługi o wartość czasu spóźnienia.</p>
        <p className='page_paragraph'>4. Klient pozostawia odzież wierzchnią w szatni i oczekuje na przyjęcie w poczekalni, gdzie może samodzielnie skorzystać z ekspresu do kawy oraz filtrowanej wody.</p>
        <p className='page_paragraph'>5. Pracownik ma prawo odmówić bądź przerwać realizację Usługi jeśli uzna, że:</p>
        <ul className='page_ul'>
          <li className='page_li'>Klient łamie podstawowe zasady kultury;</li>
          <li className='page_li'>Klient narusza godność osobistą Pracownika;</li>
          <li className='page_li'>istnieje zagrożenie zdrowia Klienta;</li>
          <li className='page_li'>wymagane są większe kompetencje Pracownika.</li>
        </ul>
        <p className='page_paragraph'>6. Niektóre Usługi wymagają rozebrania się, jednakże Klient nigdy nie rozbiera się bardziej niż wymaga tego opracowywany obszar ciała. Podczas realizacji takiej Usługi Klient przykrywany jest ręcznikiem lub pozostaje w stosownym stroju.</p>
        <p className='page_paragraph'>7. Szczegółowy opis organizacji oraz przebiegu wizyty dla poszczególnych Usług dostępny jest pod adresem <Link className='page_link' to='../wizyta'>http://www.fizjopersonalny.pl/wizyta</Link>.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§5 Prawa i obowiązki Klienta">
        <p className='page_paragraph'>1. W trakcie realizowania Usługi na terenie Studia, Klient ma prawo do:</p>
        <ul className='page_ul'>
          <li className='page_li'>poszanowania godności oraz uprzejmego traktowania przez Pracowników;</li>
          <li className='page_li'>otrzymania wysokiej jakości świadczeń wykonywanych przez Pracowników o wymaganych kwalifikacjach;</li>
          <li className='page_li'>uzyskania rzetelnej informacji o aktualnym stanie zdrowia, proponowanych metodach jego poprawy, następstwach ich stosowania lub zaniechania;</li>
          <li className='page_li'>otrzymania pomocy i wyjaśnień w zakresie przygotowania się do realizacji Usługi;</li>
          <li className='page_li'>wyrażenia zgody lub odmowy realizacji Usługi po uzyskaniu odpowiednich informacji;</li>
          <li className='page_li'>korzystania z udogodnień dostępnych na terenie Studia (filtrowana woda, kawa, kosmetyki, itp.).</li>
        </ul>
        <p className='page_paragraph'>2. W trakcie realizowania Usługi na terenie Studia, Klient ma obowiązek:</p>
        <ul className='page_ul'>
          <li className='page_li'>poinformować Pracownika o aktualnym stanie zdrowia, w tym o występujących schorzeniach, urazach, istniejących przeciwwskazaniach do terapii oraz pozostawaniu pod opieką innego specjalisty;</li>
          <li className='page_li'>poinformować Pracownika o bólu, dyskomforcie lub innych objawach, które są odczuwane podczas lub po przeprowadzonej wizycie (może mieć to istotny wpływ na efektywność i dalszy przebieg terapii/treningu);</li>
          <li className='page_li'>przestrzegania higieny osobistej;</li>
          <li className='page_li'>posiadania obuwia sportowego i stroju na zmianę oraz własnego ręcznika podczas wizyty;</li>
          <li className='page_li'>przestrzegania zaleceń Pracownika;</li>
          <li className='page_li'>okazania wyników badań (USG, RTG, MRI, itp.).</li>
        </ul>
        <p className='page_paragraph'>3. Urazy powstałe w wyniku zatajenia przez Klienta informacji o własnym stanie zdrowia lub niestosowanie się do zaleceń Pracownika, nie mogą być podstawą do wnoszenia roszczeń wobec Firmy.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§6 Parkowanie samochodu">
        <p className='page_paragraph'>1. Klient decydujący się na przyjazd własnym samochodem ma możliwość zaparkowania na parkingu, znajdującym się na terenie zamkniętego osiedla gdzie zlokalizowane jest Studio. </p>
        <p className='page_paragraph'>2. Za postój na parkingu nie jest pobierana dodatkowa opłata.</p>
        <p className='page_paragraph'>3. Klient może pozostawić samochód na parkingu tylko na czas pobytu w Studio.</p>
        <p className='page_paragraph'>4. Brama wjazdowa otwierana jest zdalnie każdorazowo na prośbę Klienta. Prośba kierowana jest za pośrednictwem telefonu lub osobiście w Studio.</p>
        <p className='page_paragraph'>5. Klient parkuje samochód na dowolnym, wolnym miejscu w sposób zgodny ze wskazówkami umieszczonymi na parkingowych tablicach informacyjnych.</p>
        <p className='page_paragraph'>6. Klient parkuje na terenie parkingu na własną odpowiedzialność.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§7 Przepisy porządkowe">
        <p className='page_paragraph'>1. Na terenie Studia obowiązuje bezwzględny zakaz używania wyrobów tytoniowych oraz papierosów elektronicznych, spożywania napojów alkoholowych oraz zażywania narkotyków i przebywania pod ich wpływem.</p>
        <p className='page_paragraph'>2. Klient przebywający na terenie Studia zobowiązany jest do poszanowania mienia Studia oraz mienia należącego do innych Klientów, jak również do zachowania czystości.</p>
        <p className='page_paragraph'>3. Klient odpowiedzialny za zniszczenie mienia, o którym mowa w ust. 2, zobowiązany jest do pokrycia kosztów naprawy lub wymiany zniszczonego mienia.</p>
        <p className='page_paragraph'>4. Klient zachowujący się niestosownie w stosunku do innych osób przebywających w Studio, zobowiązany jest na prośbę Pracownika do natychmiastowego opuszczenia terenu Studia.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§8 Program lojalnościowy">
        <p className='page_paragraph'>1. Polecający ma prawo do otrzymania zniżki na Usługi w ramach programu lojalnościowego.</p>
        <p className='page_paragraph'>2. Za każde skuteczne polecenie (czyli takie w wyniku którego Polecany zakupił jedną z Usług), Polecający otrzyma jednorazową zniżkę w wysokości 10% na zakup dowolnej Usługi (jednorazowej lub pakietowej). </p>
        <p className='page_paragraph'>3. Zniżka przyznawana jest z uwzględnieniem aktualnych cen Usług, wskazanych w Cenniku.</p>
        <p className='page_paragraph'>4. Polecany ma obowiązek poinformować Pracownika podczas pierwszej wizyty o tym, kim jest Polecający. Bez tej informacji niemożliwym jest przyznanie zniżki Polecającemu.</p>
        <p className='page_paragraph'>5. Polecający otrzyma wiadomość sms z informacją o przyznaniu zniżki.</p>
        <p className='page_paragraph'>6. Zniżka ważna jest przez 3 miesiące od daty zakupu Usługi przez Polecanego</p>
        </ToggleGlobal>

        <ToggleGlobal title="§9 Opinie i wnioski">
        <p className='page_paragraph'>1. Opinie oraz wnioski Klient może składać na piśmie na adres korespondencyjny: Łukasz Kaleńczuk - FizjoPersonalny, ul. Wrzeciono 63a/2b, 01-950 Warszawa lub za pośrednictwem poczty elektronicznej, na adres: <a href="mailto:lukasz@fizjopersonalny.pl" target="_blank" rel="noreferrer" className='page_link'>lukasz@fizjopersonalny.pl</a>. </p>
        <p className='page_paragraph'>2. Klient ma również możliwość wyrażenia swojej opinii za pośrednictwem profilu Firmy w Google Maps pod adresem: <a href="https://g.page/r/Cfcg01ly1ODXEBE/review" target="_blank" rel="noreferrer" className='page_link'>https://g.page/r/Cfcg01ly1ODXEBE/review</a>.</p>
        <p className='page_paragraph'>3. Wszystkie opinie i wnioski są rozpatrywane w terminie 30 dni od dnia ich wpływu.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§10 Przetwarzanie i ochrona danych osobowych">
        <p className='page_paragraph'>1. Dane Klienta są pozyskiwane i przetwarzanie w oparciu o przepisy RODO oraz Ustawy o prawach pacjenta.</p>
        <p className='page_paragraph'>2. Administratorem danych osobowych Klienta jest Firma.</p>
        <p className='page_paragraph'>3. We wszelkich sprawach związanych z przetwarzaniem danych osobowych przez Firmę należy się kontaktować z Inspektorem Ochrony Danych dostępnym pod adresem: <a href="mailto:lukasz@fizjopersonalny.pl" target="_blank" rel="noreferrer" className='page_link'>lukasz@fizjopersonalny.pl</a>.</p>
        <p className='page_paragraph'>4. Dane pobierane od Klienta obejmują: nazwisko i imię, datę urodzenia, oznaczenie płci, adres miejsca zamieszkania oraz numer PESEL. W przypadku Klienta, który nie posiada nadanego numeru PESEL pobierana jest informacja o rodzaju i numerze dokumentu potwierdzającego tożsamość. W przypadku Klienta, o którym mowa w §4 ust. 2, pobierana jest informacja o nazwisku, imieniu oraz adresie zamieszkania przedstawiciela ustawowego.</p>
        <p className='page_paragraph'>5. Dodatkowo Klient jest proszony o udostępnienie numeru telefonu oraz adresu poczty elektronicznej.</p>
        <p className='page_paragraph'>6. Podczas świadczenia Usług tworzona jest dokumentacja medyczna i/lub treningowa Klienta, w której odnotowywane są informacje dotyczące procesu poprawy sprawności. Informacje te są niezbędne do poprowadzenia terapii i/lub treningu w sposób właściwy i efektywny.</p>
        <p className='page_paragraph'>7. Firma zobowiązana jest do prowadzenia dokumentacji medycznej w sposób określony przepisami prawa, w tym do oznaczenia tożsamości pacjenta z wykorzystaniem jego danych osobowych. W takim przypadku niepodanie danych może skutkować odmową rezerwacji wizyty i realizacji niektórych Usług (medycznych).</p>
        <p className='page_paragraph'>8. Podanie danych, o których mowa w ust. 5, odbywa się na zasadzie dobrowolności. Ich niepodanie nie będzie skutkowało odmową realizacji Usługi, jednakże ich brak w stopniu znacznym utrudnia bezpośredni kontakt z Klientem (np. Klient nie otrzyma wiadomości sms z potwierdzeniem czy przypomnieniem o wizycie lub nie będzie miał możliwości odwołania jej poprzez np. SMS).</p>
        <p className='page_paragraph'>9. Firma posiada obowiązek prawny przetwarzania danych rachunkowych i podatkowych Klienta. Brak ich podania może skutkować np. niemożnością wystawienia faktury czy imiennego rachunku na rzecz Klienta.</p>
        <p className='page_paragraph'>10. Firma dba o poufność danych Klienta. Z uwagi na konieczność zapewnienia odpowiedniej organizacji Firmy (w zakresie infrastruktury informatycznej, bieżących spraw dotyczących działalności Firmy jako przedsiębiorcy, realizacji praw Klienta jako pacjenta) dane Klienta mogą być przekazywane następującym kategoriom odbiorców:</p>
        <ul className='page_ul'>
          <li className='page_li'>dostawcom usług zaopatrujących Firmę w rozwiązania techniczne oraz organizacyjne, umożliwiające realizację Usług oraz zarządzanie Firmą;</li>
          <li className='page_li'>dostawcom usług płatniczych;</li>
          <li className='page_li'>dostawcom usług prawnych i doradczych oraz wspierających Firmę w dochodzeniu należnych roszczeń;</li>
          <li className='page_li'>osobom upoważnionym przez Klienta w ramach realizacji praw pacjenta;</li>
          <li className='page_li'>inni odbiorcy, jeżeli będzie to konieczne dla realizacji celów objętych zgodami uzyskanymi od Klienta.</li>
        </ul>
        <p className='page_paragraph'>11. Firma ma obowiązek przechowywania dokumentacji medycznej przez okres 20 lat od dnia dokonania w niej ostatniego wpisu.</p>
        <p className='page_paragraph'>12. Jeżeli Firma przetwarza dane w celu dochodzenia roszczeń (np. w postępowaniach windykacyjnych) to są one przetwarzane przez okres przedawnień roszczeń, wynikający z przepisów kodeksu cywilnego.</p>
        <p className='page_paragraph'>13. Dane przetwarzane na potrzeby rachunkowości oraz ze względów podatkowych są przetwarzane przez 5 lat liczonych od końca roku kalendarzowego, w którym powstał obowiązek podatkowy.</p>
        <p className='page_paragraph'>14.	Dane przetwarzane w celach marketingowych są przetwarzane od chwili wyrażenia zgody do czasu jej cofnięcia. Po upływie ww. okresów dane Klienta są usuwane.</p>
        <p className='page_paragraph'>15. Klient ma prawo dostępu do własnych danych, może je sprostować, żądać ich usunięcia lub ograniczenia ich przetwarzania. Klient może również skorzystać z prawa do złożenia wobec Firmy sprzeciwu wobec przetwarzania danych oraz prawa do przenoszenia danych do innego administratora danych. Klient korzysta z ww. praw za pośrednictwem kanałów komunikacyjnych wymienionych w §3 ust. 1 lub osobiście w Studio.</p>
        <p className='page_paragraph'>16. Klient ma prawo do wniesienia skargi do organu nadzorującego przestrzeganie przepisów ochrony danych osobowych.</p>
        </ToggleGlobal>

        <ToggleGlobal title="§11 Postanowienia końcowe">
        <p className='page_paragraph'>1. Firma zastrzega sobie prawo do zmiany treści Regulaminu, o czym poinformuje Klienta za pośrednictwem wiadomości e-mail.</p>
        <p className='page_paragraph'>2. Zawsze aktualna treść Regulaminu jest dostępna pod adresem <Link className='page_link' to='../regulamin-studia'>www.fizjopersonalny.pl/regulamin-studia</Link>.</p>
        <p className='page_paragraph'>3. Niewyrażenie zgody na postanowienia Regulaminu jest równoznaczne z brakiem możliwości korzystania z Usług świadczonych w Studio.</p>
        <p className='page_paragraph'>4. Nieznajomość Regulaminu nie zwalnia z przestrzegania zasad w nim ujętych.</p>
        <p className='page_paragraph'>5. W sprawach nieuregulowanych w niniejszym Regulaminie stosuje się przepisy Kodeksu Cywilnego oraz inne obowiązujące przepisy prawa, dotyczące działalności Firmy.</p>
        <p className='page_paragraph'>6. Załączniki do niniejszego Regulaminu są dostępne pod adresem <Link className='page_link' to='../dokumenty'>www.fizjopersonalny.pl/dokumenty</Link>.</p>
        <p className='page_paragraph'>7. Regulamin obowiązuje od dnia 1 lutego 2023 roku.</p>
        </ToggleGlobal>

      </div>
    </LayoutGlobal>
  )
}
