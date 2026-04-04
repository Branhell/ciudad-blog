-- Usuarios iniciales
INSERT INTO usuarios(nombre, email, password, fecha_registro, rol)
VALUES 
('Test User', 'test@gmail.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW(), 'PACIENTE'),
('Laura Martínez', 'laura.martinez@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '45 days', 'ADMIN'),
('Carlos Herrera', 'carlos.herrera@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '38 days', 'PROFESIONAL'),
('Ana Sofía Ríos', 'ana.rios@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '30 days', 'PACIENTE'),
('Sebastián Torres', 'sebastian.torres@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '22 days', 'PACIENTE'),
('Valentina Cruz', 'valentina.cruz@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '15 days', 'PACIENTE'),
('Andrés Morales', 'andres.morales@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '10 days', 'PACIENTE'),
('Camila Vargas', 'camila.vargas@ecobits.com', '$2b$12$ku/zNsose7vwFS4Q/uaEGO2NZa7WJO3rpU9G6CrL7bTOsz0V2EkCW', NOW() - INTERVAL '5 days', 'PACIENTE')
ON CONFLICT (email) DO NOTHING;

-- Posts iniciales
INSERT INTO posts(anonimo, aprobado, categoria, comentarios_count, contenido, fecha, likes, solicitud_eliminacion, titulo, autor_id)
VALUES
(false, true, 'General', 3, 'Bienvenidos a EcoBits, un espacio donde exploramos cómo la tecnología transforma nuestra mente y bienestar. Aquí encontrarás recursos, profesionales y una comunidad que entiende los desafíos del mundo digital.', NOW() - INTERVAL '40 days', 12, false, 'Bienvenidos a EcoBits', 2),
(false, true, 'Noticias', 2, 'Un nuevo estudio de la Universidad de Stanford revela que el uso excesivo de redes sociales puede aumentar los niveles de cortisol hasta un 30%.', NOW() - INTERVAL '35 days', 8, false, 'Estudio: redes sociales y estrés digital', 3),
(false, true, 'Servicios', 1, 'Nuestro servicio de evaluación de bienestar digital te permite identificar qué herramientas tecnológicas generan más ansiedad en tu día a día.', NOW() - INTERVAL '28 days', 6, false, 'Nuevo servicio: evaluación de bienestar digital', 2),
(false, true, 'General', 5, '¿Sientes que no puedes desconectarte del trabajo aunque ya terminó tu jornada? El síndrome de hiperconectividad afecta al 60% de los trabajadores remotos.', NOW() - INTERVAL '21 days', 15, false, '¿Eres adicto a estar conectado?', 4),
(false, true, 'Productos', 2, 'Presentamos QuantumPoint, nuestro sistema de recompensas para usuarios activos. Acumula puntos por completar evaluaciones y participar en foros.', NOW() - INTERVAL '18 days', 10, false, 'Conoce QuantumPoint: tu sistema de recompensas', 2),
(false, true, 'Eventos', 1, 'El próximo 15 de abril realizaremos nuestro primer webinar: Mente y tecnología en el trabajo. Inscripción gratuita para miembros activos.', NOW() - INTERVAL '12 days', 7, false, 'Webinar: Mente y tecnología en el trabajo', 3),
(true, true, 'General', 4, 'Llevo tres meses usando realidad virtual para manejar mi ansiedad social y los resultados me sorprendieron. ¿Alguien más ha probado terapias con RV?', NOW() - INTERVAL '8 days', 19, false, 'Mi experiencia con terapia en realidad virtual', 5),
(false, true, 'QuantumMagazine', 0, 'Las interfaces cerebro-computadora ya no son ciencia ficción. ¿Estamos preparados psicológicamente para fusionar nuestra mente con la tecnología?', NOW() - INTERVAL '5 days', 11, false, 'BCI: ¿Está lista nuestra mente para fusionarse con la tecnología?', 4),
(false, true, 'Institucional', 0, 'EcoBits nació con una misión clara: entender y mejorar el impacto de la tecnología en la salud mental. Gracias a cada persona que confió en este proyecto.', NOW() - INTERVAL '3 days', 23, false, '6 meses de EcoBits: gracias comunidad', 2),
(false, true, 'Noticias', 0, 'La OMS incluye por primera vez el trastorno por uso compulsivo de internet en su clasificación oficial de enfermedades.', NOW() - INTERVAL '1 day', 9, false, 'OMS reconoce oficialmente la adicción a internet', 3)
ON CONFLICT DO NOTHING;
