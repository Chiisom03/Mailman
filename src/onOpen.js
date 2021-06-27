const onOpen = () => {
    SpreadsheetApp.getUi()
    .createMenu('⇨ Mailman')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Credits', 'showCredits')
    .addToUi();

    Logger.log("Hello I'm working perfectly fine");
};

export default onOpen;