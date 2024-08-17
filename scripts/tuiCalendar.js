export const gerar_calendario_tui_calendar = () => {
    const TuiCalendar = tui.Calendar;

    const calendario = new TuiCalendar('#calendar', {
        defaultView: 'month', // opções: 'day', 'week', 'month'
        taskView: false, // exibir ou não a visão de tarefas
        scheduleView: true, // exibir ou não a visão de eventos
        useDetailPopup: true, // popup de detalhes dos eventos
        useCreationPopup: true, // popup para criação de eventos
        template: {
            monthDayname: function (dayname) {
                return `<span class="calendar-week-dayname-name">${dayname.label}</span>`;
            }
        }
    });

    // Exemplo de criação de um evento
    calendario.createSchedules([
        {
            id: '1',
            calendarId: '1',
            title: 'Evento de Exemplo',
            category: 'time',
            dueDateClass: '',
            start: '2024-08-08T09:00:00+00:00',
            end: '2024-08-08T10:00:00+00:00'
        }
    ]);

};