chrome.downloads.onDeterminingFilename.addListener((item, suggest) => {
    let filename = item.filename;
    let ext = filename.split('.').pop().toLowerCase();

    let folder = "";

    if (["jpg", "jpeg", "png", "gif"].includes(ext)) {
        folder = "img/";
    } else if (["pdf", "docx", "doc", "xls", "xlsx", "ppt", "pptx", "txt", "drawio"].includes(ext)) {
        folder = "docs/";
    } else if (["mp4", "mkv", "avi", "mov"].includes(ext)) {
        folder = "video/";
    } else if (["zip", "rar", "7z", "tar", "gz"].includes(ext)) {
        folder = "package/";
    } else if (["mp3", "wav", "flac"].includes(ext)) {
        folder = "audio/";
    } else if (["exe", "msi", "deb", "rpm"].includes(ext)) {
        folder = "app/";
    } else {
        suggest({ filename: filename });
        return;
    }

    if (!folder) {
        suggest({ filename: filename, conflictAction: "uniquify" });
        return;
    }

    suggest({
        filename: folder + filename,
        conflictAction: "uniquify"
    });
});