chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    let filename = item.filename;
    let ext = filename.split('.').pop().toLowerCase();

    let folder = "";

    if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
        folder = "img/";
    } else if (["pdf", "docx", "doc"].includes(ext)) {
        folder = "docs/";
    } else if (["mp4", "mkv"].includes(ext)) {
        folder = "video/";
    } else if (["zip", "rar"].includes(ext)) {
        folder = "package/";
    } else if (["mp3", "wav"].includes(ext)) {
        folder = "audio/";
    } else if (["exe", "msi"].includes(ext)) {
        folder = "app/";
    } else {
        suggest({ filename: filename });
        return;
    }

    suggest({
        filename: folder + filename,
        conflictAction: "uniquify"
    });
});