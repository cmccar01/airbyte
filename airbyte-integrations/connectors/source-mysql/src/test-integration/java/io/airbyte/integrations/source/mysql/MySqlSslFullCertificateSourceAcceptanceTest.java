/*
 * Copyright (c) 2022 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.source.mysql;

import static io.airbyte.integrations.source.mysql.MySqlSource.SSL_PARAMETERS;
import static io.airbyte.integrations.source.mysql.MySqlSource.SSL_PARAMETERS_WITH_CERTIFICATE_VALIDATION;

import com.google.common.collect.ImmutableMap;
import io.airbyte.commons.json.Jsons;
import io.airbyte.db.Database;
import io.airbyte.db.MySqlUtils;
import io.airbyte.db.factory.DSLContextFactory;
import io.airbyte.db.factory.DatabaseDriver;
import io.airbyte.db.jdbc.JdbcUtils;
import io.airbyte.integrations.source.mysql.MySqlSource.ReplicationMethod;
import io.airbyte.integrations.standardtest.source.TestDestinationEnv;
import org.jooq.DSLContext;
import org.jooq.SQLDialect;
import org.testcontainers.containers.MySQLContainer;

public class MySqlSslFullCertificateSourceAcceptanceTest extends MySqlSourceAcceptanceTest {

  private static MySqlUtils.Certificate certs;
  private static final String PASSWORD = "Passw0rd";

  @Override
  protected void setupEnvironment(final TestDestinationEnv environment) throws Exception {
    container = new MySQLContainer<>("mysql:8.0");
    container.start();
    certs = MySqlUtils.getCertificate(container);

    var sslMode = ImmutableMap.builder()
        .put(JdbcUtils.MODE_KEY, "verify_identity")
        .put("ca_certificate", certs.getCaCertificate())
        .put("client_certificate", certs.getClientCertificate())
        .put("client_key", certs.getClientKey())
        .put("client_key_password", PASSWORD)
        .build();

    config = Jsons.jsonNode(ImmutableMap.builder()
        .put(JdbcUtils.HOST_KEY, container.getHost())
        .put(JdbcUtils.PORT_KEY, container.getFirstMappedPort())
        .put(JdbcUtils.DATABASE_KEY, container.getDatabaseName())
        .put(JdbcUtils.USERNAME_KEY, container.getUsername())
        .put(JdbcUtils.PASSWORD_KEY, container.getPassword())
        .put(JdbcUtils.SSL_KEY, true)
        .put(JdbcUtils.SSL_MODE_KEY, sslMode)
        .put("replication_method", ReplicationMethod.STANDARD)
        .build());

    try (final DSLContext dslContext = DSLContextFactory.create(
        config.get(JdbcUtils.USERNAME_KEY).asText(),
        config.get(JdbcUtils.PASSWORD_KEY).asText(),
        DatabaseDriver.MYSQL.getDriverClassName(),
        String.format("jdbc:mysql://%s:%s/%s?%s",
            config.get(JdbcUtils.HOST_KEY).asText(),
            config.get(JdbcUtils.PORT_KEY).asText(),
            config.get(JdbcUtils.DATABASE_KEY).asText(),
            String.join("&", SSL_PARAMETERS),
            String.join("&", SSL_PARAMETERS_WITH_CERTIFICATE_VALIDATION)),
        SQLDialect.MYSQL)) {
      final Database database = new Database(dslContext);

      database.query(ctx -> {
        ctx.fetch("CREATE TABLE id_and_name(id INTEGER, name VARCHAR(200));");
        ctx.fetch(
            "INSERT INTO id_and_name (id, name) VALUES (1,'picard'),  (2, 'crusher'), (3, 'vash');");
        ctx.fetch("CREATE TABLE starships(id INTEGER, name VARCHAR(200));");
        ctx.fetch(
            "INSERT INTO starships (id, name) VALUES (1,'enterprise-d'),  (2, 'defiant'), (3, 'yamato');");
        return null;
      });
    }
  }

}