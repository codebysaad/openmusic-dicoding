const success = 'success';
const fail = 'fail';
const errorVar = 'error';
const untitled = 'untitled';
const song = 'song-';
const statusCode = {
    success: 200,
    error: 500,
    notfound: 404,
    unauthorized: 401,
    conflict: 409,
    saved: 201,
    badRequest: 400,
    nocontent: 204,
};
const statusMessage = {
    saveSuccessful: 'Lagu berhasil ditambahkan',
    saveUnsuccessful: 'Lagu gagal ditambahkan',
    songNotFound: 'Lagu tidak ditemukan',
    serverFail: 'Maaf, server sedang error',
    updateSuccessful: 'Lagu berhasil diperbarui',
    updateIdNotFound: 'Gagal memperbarui lagu. Id lagu tidak ditemukan',
    deleteSuccessful: 'Lagu berhasil dihapus',
    deleteIdNotFound: 'Lagu gagal dihapus. Id tidak ditemukan',
};

module.exports = { success, fail, errorVar, untitled, statusCode, statusMessage, song };
