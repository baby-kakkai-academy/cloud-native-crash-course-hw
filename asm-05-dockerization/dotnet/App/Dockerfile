FROM mcr.microsoft.com/dotnet/sdk:6.0
WORKDIR /app

# Copy everything
COPY . ./
# Restore as distinct layers
RUN dotnet restore
# Build and publish a release
RUN dotnet publish -c Release -o out
EXPOSE 8084
WORKDIR out/
ENTRYPOINT ["dotnet", "dotnetweb.dll"]
