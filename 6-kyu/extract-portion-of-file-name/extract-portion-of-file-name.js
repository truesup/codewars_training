class FileNameExtractor {
    static extractFileName(dirtyFileName) {
        return dirtyFileName.match(/^\d+_(.+)\.[^.]+$/)[1];
    }
}
​