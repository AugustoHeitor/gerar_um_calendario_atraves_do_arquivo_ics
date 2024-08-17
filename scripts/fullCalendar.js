export const gerar_calendario_full_calendar = async () => {
    const calendarEl = document.getElementById('calendar');

    // Função para carregar e parsear o arquivo .ics
    const loadICS = async (icsUrl) => {
        const response = await fetch(icsUrl);
        const icsText = await response.text();

        const jcalData = ICAL.parse(icsText);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        // Mapeando os eventos para o formato do FullCalendar
        return vevents.map(event => {
            const titulo = event.getFirstPropertyValue('summary');
            const inicio_do_evento = event.getFirstPropertyValue('dtstart').toJSDate();
            const fim_do_evento = event.getFirstPropertyValue('dtend')?.toJSDate();

            return {
                title: titulo,
                start: inicio_do_evento,
                end: fim_do_evento
            };
        });
    }

    // Carregar eventos do arquivo .ics
    const eventos_do_arquivo = await loadICS('./arquivos/eventos.ics');

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: eventos_do_arquivo
    });

    calendar.render();
}