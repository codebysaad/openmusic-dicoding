/* eslint-disable camelcase */
const mapDBToModel = ({ 
    id,
    title,
    year,
    performer,
    genre,
    duration,
    inserted_at,
    updated_at,
  }) => ({
    id,
    title,
    year,
    performer,
    genre,
    duration,
    inserted_at: inserted_at,
    updated_at: updated_at,
  });

module.exports = { mapDBToModel };
