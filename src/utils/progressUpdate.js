const progressUpdate = (
  fetchedCompanies,
  fetchedCompaniesWithIncomes,
  setter
) => {
  if (
    fetchedCompaniesWithIncomes.length %
      (fetchedCompanies.length / 100).toFixed() ===
    0
  ) {
    return setter(
      (
        (fetchedCompaniesWithIncomes.length / fetchedCompanies.length) *
        100
      ).toFixed()
    );
  }
};

export default progressUpdate;
